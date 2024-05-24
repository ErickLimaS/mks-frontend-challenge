import ProductCard from '@/app/components/ProductCard'
import handleCartReducer from '@/app/lib/Redux/Features/handleCart'
import StyledComponentsRegistry from '@/app/lib/registry'
import StoreProvider from '@/app/StoreProvider'
import ReactQueryProvider from "@/app/lib/ReactQuery/Provider"
import { configureStore } from '@reduxjs/toolkit/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe("Product card Buy Button", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    // Standard product fetched from API
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

    it("adds the product to cart", async () => {

        const user = userEvent.setup()

        const mockStore = configureStore({
            reducer: {
                CartItems: handleCartReducer
            }
        })

        render(
            <StoreProvider testMockStore={mockStore}>

                <ReactQueryProvider>

                    <StyledComponentsRegistry>
                        <ProductCard data={mockProductItem} />
                    </StyledComponentsRegistry>

                </ReactQueryProvider>

            </StoreProvider>
        )

        // Cart State should be initiate empty
        expect(mockStore.getState().CartItems).toEqual({ value: [] })

        const productCardBuyButton = screen.getByRole("button", { name: "COMPRAR" })

        // Click on COMPRAR(buy) button
        await user.click(productCardBuyButton)

        // After click, should have the product on its State
        expect(mockStore.getState().CartItems).toEqual({ value: [{ ...mockProductItem, unitsOnCart: 1 }] })

    })

    it("adds one more unit to the a product previous added", async () => {

        const user = userEvent.setup()

        const mockStore = configureStore({
            reducer: {
                CartItems: handleCartReducer
            }
        })

        render(
            <StoreProvider testMockStore={mockStore}>

                <ReactQueryProvider>

                    <StyledComponentsRegistry>
                        <ProductCard data={mockProductItem} />
                    </StyledComponentsRegistry>

                </ReactQueryProvider>

            </StoreProvider>
        )

        // Cart State should be initiate empty
        expect(mockStore.getState().CartItems).toEqual({ value: [] })

        const productCardBuyButton = screen.getByRole("button", { name: "COMPRAR" })

        // First click on COMPRAR(buy) button
        await user.click(productCardBuyButton)

        // After First click, it should have the product on its State, being 1 product added to cart
        expect(mockStore.getState().CartItems).toEqual({ value: [{ ...mockProductItem, unitsOnCart: 1 }] })

        // Second click on COMPRAR(buy) button
        await user.click(productCardBuyButton)

        // After Second click, it should have added 1 more product unit on State, being 1 product with 2 units on cart
        expect(mockStore.getState().CartItems).toEqual({ value: [{ ...mockProductItem, unitsOnCart: 2 }] })

    })

})