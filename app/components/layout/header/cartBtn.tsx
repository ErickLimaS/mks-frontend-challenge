"use client"
import React from 'react'
import styled from 'styled-components'
import CartSvg from "@/public/assets/svg/cart.svg"

const Cart = styled.button<{cartItems: number}>`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 8px;

    @media (min-width: 768px) {
        gap: 16px;
    }

    background: #FFF;

    padding: 8px 8px;

    @media (min-width: 768px) {
        padding: 8px 16px;
    }

    border-radius: 8px;

`

function CartButton() {

    // placeholder
    const itemsOnCart = 0

    return (
        <Cart cartItems={itemsOnCart}>

            <CartSvg className="max-md:scale-75" />

            <span className='font-bold text-xs md:text-lg pr-2 md:pr-4'>
                {itemsOnCart}
            </span>

        </Cart>
    )
}

export default CartButton