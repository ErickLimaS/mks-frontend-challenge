"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PriceTag from '../PriceTag'
import ShoppingBagSvg from "@/public/assets/svg/shopping-bag.svg"
import { useAppDispatch, useAppSelector } from '@/app/lib/Redux/hooks'
import { addOneUnitToCart } from '@/app/lib/Redux/Features/handleCart'

const Card = styled.div<{ amountOnCart: number }>`

    min-height: 100%;

    background: #FFF;

    border-radius: 8px;

    box-shadow:  ${props => props.amountOnCart >= 1 ? "0px 2px 8px 0px #00000044" : "0px 2px 8px 0px #00000022"};

    transform: ${props => props.amountOnCart >= 1 ? "scale(1.05)" : "scale(1)"};

    transition: all ease-in-out 200ms;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 16px 0;

`

const BuyBtn = styled.button`

    width: 100%;

    background: var(--primary);

    border-radius: 0px 0px 8px 8px;

    padding: 8px;
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    
    gap: 0 16px;

    color: #FFF;

    font-size: 14px;
    font-weight: 600;

`

function ProductCard({ data }: { data: ProductType }) {

    const [amountAddedToCart, setAmountAddedToCart] = useState<number>(0)

    const cartState = useAppSelector((state) => (state.CartItems as { value: ProductOnCartType[] }).value)
    const dispatch = useAppDispatch()

    function handleBuyBtn(product: ProductType) {

        setAmountAddedToCart(amountAddedToCart + 1)

        dispatch(addOneUnitToCart(product))

    }

    useEffect(() => {

        const unitsOnCartState = cartState.find(item => item.id == data.id)

        setAmountAddedToCart(unitsOnCartState?.unitsOnCart || 0)

    }, [cartState])

    return (
        <Card amountOnCart={amountAddedToCart}>

            <div className='relative min-w-32 aspect-[0.8/1] mt-6'>
                <Image
                    src={data.photo}
                    alt={data.name}
                    fill
                    sizes='(max-width: 420px) 70vw, (max-width: 768px) 35vw, 128px'
                />
            </div>

            <div className='flex gap-4 sm:gap-12 md:gap-4 lg:gap-6 items-start justify-between w-full px-4'>

                <h3 className='text-[#2C2C2C] text-base font-normal line-clamp-2'>
                    {data.name}
                </h3>

                <PriceTag price={data.price} />

            </div>

            <p className='text-[10px] font-light mb-2 px-4 line-clamp-2'>
                {data.description}
            </p>

            <BuyBtn onClick={() => handleBuyBtn(data)}>
                <ShoppingBagSvg /> {amountAddedToCart ? `${amountAddedToCart} NO CARRINHO` : "COMPRAR"}
            </BuyBtn>

        </Card>
    )
}

export default ProductCard