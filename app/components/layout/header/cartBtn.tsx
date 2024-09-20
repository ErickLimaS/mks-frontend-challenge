"use client"
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CartSvg from "@/public/assets/svg/cart.svg"
import { useAppDispatch, useAppSelector } from '@/app/lib/Redux/hooks'
import { toggleVisibility } from '@/app/lib/Redux/Features/showCheckout'
import { motion } from 'framer-motion'

const Cart = styled.button<{ cartItems: number }>`

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

    const [itemsOnCart, setItemsOnCart] = useState<number>(0)

    const cartState = useAppSelector((state) => (state.CartItems as { value: ProductOnCartType[] }).value)

    const dispatch = useAppDispatch()

    function changeCheckoutVisibility() {

        dispatch(toggleVisibility())

    }

    useEffect(() => setItemsOnCart(cartState.length), [cartState.length])

    return (
        <Cart
            as={motion.button}
            title="Abrir Carrinho"
            cartItems={itemsOnCart}
            onClick={() => changeCheckoutVisibility()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >

            <CartSvg className="max-md:scale-75" />

            <span className='tabular-nums font-bold text-xs md:text-lg pr-2 md:pr-4'>
                {itemsOnCart}
            </span>

        </Cart>
    )
}

export default CartButton