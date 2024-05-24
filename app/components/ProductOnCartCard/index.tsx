"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PriceTag from '../PriceTag'
import { useAppDispatch } from '@/app/lib/Redux/hooks'
import { addOneUnitToCart, removeItemFromCart, removeOneUnitFromCart } from '@/app/lib/Redux/Features/handleCart'
import { AnimatePresence, motion } from 'framer-motion'

const ActionBtn = styled.button`

    width: 100%;
    height: 80%;

    padding: 0 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    color: #000;

    font-size: 22px;
    font-weight: 400;

`

function ProductOnCartCard({ data }: { data: ProductOnCartType }) {

    const [amountAddedToCart, setAmountAddedToCart] = useState<number>(data.unitsOnCart)

    const dispatch = useAppDispatch()

    function changeProductsAmount(product: ProductType, action: "add" | "remove") {

        if (action == "add") return dispatch(addOneUnitToCart(product))

        // Prevent from complete remove product from Cart
        if (amountAddedToCart > 1) dispatch(removeOneUnitFromCart(product))

    }

    function removeFromCart(product: ProductType) {

        dispatch(removeItemFromCart(product))
        setAmountAddedToCart(0)

    }

    useEffect(() => setAmountAddedToCart(data.unitsOnCart), [data.unitsOnCart])

    return (
        <AnimatePresence>
            {amountAddedToCart >= 1 && (
                <motion.div
                    className='relative flex flex-col lg:flex-row items-center justify-between gap-2 max-lg:gap-4 lg:p-4 bg-white rounded-lg min-h-full w-[96%]'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                >

                    <div className='relative min-w-20 aspect-[0.8/1] mt-6 lg:mt-0 overflow-hidden'>
                        <Image
                            src={data.photo}
                            alt={data.name}
                            fill
                            sizes='(max-width: 420px) 70vw, (max-width: 768px) 35vw, 128px'
                        />
                    </div>

                    <div className='flex items-start justify-between w-full pl-4'>

                        <h3 className='text-[#2C2C2C] text-base font-normal line-clamp-3'>
                            {data.name}
                        </h3>

                    </div>

                    <div className='flex justify-between lg:gap-x-6 w-full px-4 max-sm:pb-4 sm:px-6 max-lg:pb-6'>

                        <div className='flex flex-col'>
                            <h4 className='hidden lg:flex text-[5px]'>
                                Qtd
                            </h4>

                            <div className='flex items-center border-[1px] rounded-[4px]'>
                                <ActionBtn
                                    as={motion.button}
                                    whileTap={{ scale: 0.7 }}
                                    title="Remover 1"
                                    onClick={() => changeProductsAmount(data, "remove")}
                                >
                                    -
                                </ActionBtn>

                                <p
                                    className='flex items-center justify-center p-2 lg:py-1 text-xl lg:text-lg h-4/5 min-w-9 border-r-[1px] border-l-[1px] border-[rgba(191,191,191,1)]'
                                    aria-label={`${data.unitsOnCart} adicionado${data.unitsOnCart > 1 ? "s" : ""} no carrinho.`}
                                >
                                    {data.unitsOnCart}
                                </p>

                                <ActionBtn
                                    as={motion.button}
                                    whileTap={{ scale: 0.7 }}
                                    title="Adicionar 1"
                                    onClick={() => changeProductsAmount(data, "add")}
                                >
                                    +
                                </ActionBtn>
                            </div>
                        </div>

                        <PriceTag price={data.price} customBgcOnLgDisplay />

                    </div>

                    <motion.button
                        title='Remover produto do carrinho'
                        onClick={() => removeFromCart(data)}
                        whileHover={{ scale: 1.25 }}
                        whileTap={{ scale: 0.95 }}
                        className='absolute z-10 top-2 lg:-top-2 right-4 lg:-right-2 flex items-center justify-center max-h-9 lg:max-h-54 lg:min-w-5 text-4xl lg:text-sm font-normal lg:text-white lg:bg-black lg:rounded-full'
                    >
                        X
                    </motion.button>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ProductOnCartCard