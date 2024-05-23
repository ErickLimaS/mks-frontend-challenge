import handleCartReducer, { addOneUnitToCart } from '@/app/lib/Redux/Features/handleCart'

describe("Product card buy button", () => {

    it("adds the product to cart", () => {

        const previousState: { value: ProductOnCartType[] } = { value: [] }

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

        // Adds 1 unit to product object when button is clicked
        mockProductItem = { ...mockProductItem, unitsOnCart: 1 }

        expect(handleCartReducer(previousState, addOneUnitToCart(mockProductItem))).toEqual({ value: [mockProductItem] })

    })

    it("adds one more unit to the a product previous added", () => {

        let previousState: { value: ProductOnCartType[] } = { value: [] }

        // Product being added
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

        // Adds 1 unit to product object when button is clicked
        mockProductItem = { ...mockProductItem, unitsOnCart: 1 }

        // Should has 1 unit of the product above
        expect(handleCartReducer(previousState, addOneUnitToCart(mockProductItem))).toEqual({ value: [mockProductItem] })

        // State has the product with 1 unit
        previousState = { value: [mockProductItem] }

        // One more unit added
        const newState = {
            value: [{
                ...mockProductItem,
                unitsOnCart: 2
            }]
        }

        // State should has the same product with 2 units added 
        expect(handleCartReducer(previousState, addOneUnitToCart(mockProductItem))).toEqual(newState)

    })

})