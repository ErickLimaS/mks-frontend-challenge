"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import PriceTag from '../PriceTag'
import ShoppingBagSvg from "@/public/assets/svg/shopping-bag.svg"

const Card = styled.div<{ amountOnCart: number }>`

    height: 100%;

    background: #FFF;

    border-radius: 8px;

    box-shadow: 0px 2px 8px 0px #00000022;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 16px 0;

`

const BuyBtn = styled.button<{ wasAddedOnCart: boolean }>`

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

            <div className='flex gap-12 md:gap-6 items-start justify-between px-4'>

                <h3 className='text-[#2C2C2C] text-base font-normal line-clamp-2'>
                    {data.name}
                </h3>

                <PriceTag price={data.price} />

            </div>

            <p className='text-[10px] font-light mb-2 px-4 line-clamp-2'>
                {data.description}
            </p>

            <BuyBtn wasAddedOnCart={amountAddedToCart > 0}>
                <ShoppingBagSvg /> COMPRAR
            </BuyBtn>

        </Card>
    )
}

export default ProductCard