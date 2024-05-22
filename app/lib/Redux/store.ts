import { configureStore } from '@reduxjs/toolkit'
import cartItemsReducer from "@/app/lib/Redux/Features/handleCart"
import toggleCheckoutVisibilityReducer from '@/app/lib/Redux/Features/showCheckout'

export const makeStore = () => {
    return configureStore({
        reducer: {
            CartItems: cartItemsReducer,
            ToggleCheckoutVisibility: toggleCheckoutVisibilityReducer
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']