import '@testing-library/jest-dom'
import Layout from '@/app/components/layout'
import StyledComponentsRegistry from "@/app/lib/registry"
import StoreProvider from "@/app/StoreProvider"
import ReactQueryProvider from "@/app/lib/ReactQuery/Provider";
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { MotionGlobalConfig } from "framer-motion"

MotionGlobalConfig.skipAnimations = true

describe("Checkout Sidebar", () => {

    it("gets open when Header Cart Button is clicked", async () => {

        const user = userEvent.setup()

        render(
            <StoreProvider>

                <ReactQueryProvider>

                    <StyledComponentsRegistry>
                        <Layout>
                            <></>
                        </Layout>
                    </StyledComponentsRegistry>

                </ReactQueryProvider>

            </StoreProvider>
        )

        const headerCartBtn = screen.getByRole("button", { name: "0" }) // Name is 0 due to quantity of products on cart

        // Check if cart btn is on screen
        expect(headerCartBtn).toBeVisible()

        // This button being clicked should change the Checkout State to True (visible)
        await user.click(headerCartBtn)

        const checkoutSidebarHeadindText = screen.getByText("Carrinho de compras")

        expect(checkoutSidebarHeadindText).toBeVisible()

    })

    it("closes when Close Button(X) is clicked", async () => {

        const user = userEvent.setup()

        render(
            <StoreProvider>

                <ReactQueryProvider>

                    <StyledComponentsRegistry>
                        <Layout>
                            <></>
                        </Layout>
                    </StyledComponentsRegistry>

                </ReactQueryProvider> 

            </StoreProvider>
        )

        const headerCartBtn = screen.getByRole("button", { name: "0" }) // Name is 0 due to quantity of products on cart

        // Check if cart btn is on screen
        expect(headerCartBtn).toBeVisible()

        // This button being clicked should change the Checkout State to True (visible)
        await user.click(headerCartBtn)

        const checkoutSidebarHeadindText = screen.getByText("Carrinho de compras")

        expect(checkoutSidebarHeadindText).toBeVisible()

        // Close button on Checkout
        const closeBtn = screen.getByText('X') 
        expect(closeBtn).toBeVisible()

        // Close Checkout, Changing State to False
        await user.click(closeBtn)

        expect(checkoutSidebarHeadindText).not.toBeVisible()

    })

})
