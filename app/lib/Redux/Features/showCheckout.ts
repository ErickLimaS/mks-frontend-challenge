"use client"
import { createSlice } from "@reduxjs/toolkit"

const initialState: { value: boolean } = {

    value: false

}

export const toggleCheckoutVisibility = createSlice({
    name: "ToggleCheckoutVisibility",
    initialState,
    reducers: {
        toggleVisibility: (state) => {

            state.value = !state.value

        },
    }
})

export const { toggleVisibility } = toggleCheckoutVisibility.actions

export default toggleCheckoutVisibility.reducer