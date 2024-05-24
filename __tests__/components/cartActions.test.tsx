import Layout from "@/app/components/layout"
import toggleCheckoutVisibilityReducer from "@/app/lib/Redux/Features/showCheckout"
import StyledComponentsRegistry from "@/app/lib/registry"
import StoreProvider from "@/app/StoreProvider"
import ReactQueryProvider from "@/app/lib/ReactQuery/Provider";
import { render, screen } from '@testing-library/react'
import handleCartReducer, { addOneUnitToCart } from "@/app/lib/Redux/Features/handleCart"
import { configureStore } from "@reduxjs/toolkit/react"
import userEvent from "@testing-library/user-event"
import { MotionGlobalConfig } from "framer-motion"

MotionGlobalConfig.skipAnimations = true

describe("Checkout Cart With Products", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    let mockProductItem: ProductType | ProductOnCartType = {
        id: 5,
        name: 'Apple Watch Series 7',
        brand: 'Apple',
        description: 'O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.',
        photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
        price: '3200.00',
        createdAt: '2023-10-30T16:25:01.093Z',
        updatedAt: '2023-10-30T16:25:01.093Z'
    }

    it("increases number of the same product when button(+) is clicked", async () => {

        const user = userEvent.setup()

        const mockStore = configureStore({
            reducer: {
                CartItems: handleCartReducer,
                ToggleCheckoutVisibility: toggleCheckoutVisibilityReducer
            }
        })

        // Adds a new Product to Cart Checkout
        mockStore.dispatch(addOneUnitToCart(mockProductItem))
        expect((mockStore.getState().CartItems)).toEqual({ value: [{ ...mockProductItem, unitsOnCart: 1 }] })

        render(
            <StoreProvider testMockStore={mockStore}>

                <ReactQueryProvider>

                    <StyledComponentsRegistry>
                        <Layout>
                            <></>
                        </Layout>
                    </StyledComponentsRegistry>

                </ReactQueryProvider>

            </StoreProvider>
        )

        const headerCartBtn = screen.getByRole("button", { name: "1" }) // Name is 1 due to quantity of products on cart

        // Opens Checkout Sidebar
        await user.click(headerCartBtn)

        const increaseUnitBtn = screen.getByRole("button", { name: "+" })

        // Increase units on cart from 1 to 2
        await user.click(increaseUnitBtn)

        expect((mockStore.getState().CartItems)).toEqual({ value: [{ ...mockProductItem, unitsOnCart: 2 }] })

    })

    it("decreases number of the same product when button(-) is clicked", async () => {

        const user = userEvent.setup()

        const mockStore = configureStore({
            reducer: {
                CartItems: handleCartReducer,
                ToggleCheckoutVisibility: toggleCheckoutVisibilityReducer
            }
        })

        // Adds 2 units of the same Product on Cart Checkout
        mockStore.dispatch(addOneUnitToCart(mockProductItem))
        mockStore.dispatch(addOneUnitToCart(mockProductItem))
        expect((mockStore.getState().CartItems)).toEqual({ value: [{ ...mockProductItem, unitsOnCart: 2 }] })

        render(
            <StoreProvider testMockStore={mockStore}>

                <ReactQueryProvider>

                    <StyledComponentsRegistry>
                        <Layout>
                            <></>
                        </Layout>
                    </StyledComponentsRegistry>

                </ReactQueryProvider>

            </StoreProvider>
        )

        const headerCartBtn = screen.getByRole("button", { name: "1" }) // Name is 1 due to quantity of products on cart

        // Opens Checkout Sidebar
        await user.click(headerCartBtn)

        const decreaseUnitBtn = screen.getByRole("button", { name: "-" })

        // Decrease units on cart from 2 to 1
        await user.click(decreaseUnitBtn)

        expect((mockStore.getState().CartItems)).toEqual({ value: [{ ...mockProductItem, unitsOnCart: 1 }] })

    })

})