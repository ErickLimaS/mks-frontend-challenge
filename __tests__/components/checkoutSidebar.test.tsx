import '@testing-library/jest-dom'
import Layout from '@/app/components/layout'
import StyledComponentsRegistry from "@/app/lib/registry"
import StoreProvider from "@/app/StoreProvider"
import ReactQueryProvider from "@/app/lib/ReactQuery/Provider";
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

describe("Checkout Sidebar", () => {

    // *** ATTENTION ***
    // 
    // FRAMER MOTION CAN'T be MOCKED
    // so it will FAIL the TEST to be VISIBLE
    // 

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

        // ATTENTION: Framer Motion can not be mocked, so it will almost everytime show as Not Visible
        expect(checkoutSidebarHeadindText).toBeVisible()

    })

})
