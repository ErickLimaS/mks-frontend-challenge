"use client"
import { convertPriceToBrl } from '@/app/lib/priceToBrl'
import { toggleVisibility } from '@/app/lib/Redux/Features/showCheckout'
import { useAppDispatch, useAppSelector } from '@/app/lib/Redux/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductOnCartCard from '../../ProductOnCartCard'

const CheckoutBtn = styled.button`

    background: #000;

    width: 100%;

    text-align: center;
    color: #FFF;
    font-size: 20px;

    @media (min-width: 1360px) {
        font-size: 28px;
    };

    font-weight: 700;

    padding: 26px 0;

`

function CheckoutSidebar() {

    const isCheckoutVisible = useAppSelector((state) => state.ToggleCheckoutVisibility.value)
    const cartItems = useAppSelector((state) => state.CartItems.value)

    const [totalValueCheckout, setTotalValueCheckout] = useState<number>(0)

    function calculateCheckoutTotal() {

        let total = 0

        cartItems.map((item) => total += (Number(item.price) * item.unitsOnCart))

        setTotalValueCheckout(total)

    }

    const dispatch = useAppDispatch()

    function closeCheckout() {

        dispatch(toggleVisibility())

    }

    function submitCheckout() {

        if (cartItems.length == 0) {
            alert(`Sem produtos no carrinho.`)

            return
        }

        console.log({
            products: cartItems,
            total: totalValueCheckout
        })

        alert(`${cartItems.map(item => ` -- ${item.name} (${item.unitsOnCart} unit.)`)}

                                Total: R$ ${convertPriceToBrl(totalValueCheckout)}
                                
                                Informação completa no console.

        `)

    }

    useEffect(() => {

        calculateCheckoutTotal()

    }, [cartItems, cartItems.length])

    return (
        <AnimatePresence>
            {isCheckoutVisible && (

                <motion.div
                    className='fixed top-0 right-0 bottom-0 h-screen w-[85vw] md:w-[55vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[35vw] bg-primary shadow-3xl py-9'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                >

                    <div className='flex justify-between items-start gap-2 pl-9 pr-4'>

                        <h4 className='text-[27px] leading-8 font-bold text-white'>
                            Carrinho de compras
                        </h4>

                        <motion.button
                            title="Fechar"
                            whileTap={{ scale: 0.90 }}
                            className='min-w-11 lg:min-w-9 min-h-11 lg:min-h-9 flex items-center justify-center text-4xl lg:text-2xl font-normal text-primary lg:text-white rounded-full bg-black'
                            onClick={() => closeCheckout()}
                        >
                            X
                        </motion.button>

                    </div>

                    <div className='mx-8 sm:mx-9 my-14'>
                        <ul className='overflow-y-auto flex flex-col gap-4 h-[60vh] pt-3'>
                            {cartItems.map((item) => (

                                <li key={item.id}>
                                    <ProductOnCartCard data={item} />
                                </li>

                            ))}
                        </ul>
                    </div>

                    <div className='absolute bottom-0 right-0 left-0'>
                        <div className='px-9 mb-8 text-white bg-primary'>
                            <p className='flex justify-between text-[28px] font-bold'>
                                Total: {cartItems ? (
                                    <span>R${convertPriceToBrl(totalValueCheckout)}</span>
                                ) : (
                                    <span>R$0</span>
                                )}
                            </p>
                        </div>

                        <div>

                            <CheckoutBtn
                                as={motion.button}
                                whileTap={{ fontSize: "30px" }}
                                onClick={() => submitCheckout()}
                            >
                                Finalizar Compra
                            </CheckoutBtn>

                        </div>
                    </div>

                </motion.div>

            )}
        </AnimatePresence >
    )
}

export default CheckoutSidebar