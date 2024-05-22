"use client"
import { createSlice } from "@reduxjs/toolkit"

const initialState: { value: ProductOnCartType[] } = {
    value: JSON.parse(localStorage.getItem("CartItems") as string) || []
}

export const handleCart = createSlice({
    name: "CartItems",
    initialState,
    reducers: {
        addOneUnitToCart: (state, { payload }: { payload: ProductType }) => {

            // If array is empty, push new product
            if (state.value.length == 0) {
                state.value.push({ ...payload, unitsOnCart: 1 })

                localStorage.setItem("CartItems", JSON.stringify(state.value))

                return
            }

            // Find product on cart
            const productOnCart = state.value.find(item => item.id == payload.id)

            // If product is not on cart
            if (!productOnCart) {
                state.value.push({ ...payload, unitsOnCart: 1 })

                localStorage.setItem("CartItems", JSON.stringify(state.value))

                return
            }

            // Map current array to find the product, then adds 1 unit on cart
            const newCartList = state.value.map(item => {

                if (item.id == payload.id) {
                    return { ...item, unitsOnCart: item.unitsOnCart += 1 }
                }
                return item

            })

            state.value == newCartList
            localStorage.setItem("CartItems", JSON.stringify(newCartList))

        },
        removeOneUnitFromCart: (state, { payload }) => {

            // Map current array to find the product, then remove 1 unit from cart
            // if product's units is 1, it set it as NULL. 
            // Filter will remove the NULL results. 
            const newCartList = state.value.map(item => {

                if (item.id == payload.id) {

                    if (item.unitsOnCart > 1) {
                        return { ...item, unitsOnCart: item.unitsOnCart -= 1 }
                    }

                    return null

                }

                return item

            }).filter(item => item != null)

            state.value == newCartList
            localStorage.setItem("CartItems", JSON.stringify(newCartList))

        },
        excludeItemFromCart: (state, { payload }) => {

            const newCartList = state.value.map(item => {

                if (item.id == payload.id) return null

            }).filter(item => item != null)

            state.value == newCartList as ProductOnCartType[] | null[]
            localStorage.setItem("CartItems", JSON.stringify(newCartList))

        }
    }
})

export const { addOneUnitToCart, removeOneUnitFromCart, excludeItemFromCart } = handleCart.actions

export default handleCart.reducer