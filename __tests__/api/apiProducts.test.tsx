import { getProducts } from "@/app/api/mksApi";
import ProductsGrid from "@/app/components/ProductsGrid";
import ReactQueryProvider from "@/app/lib/ReactQuery/Provider";
import StyledComponentsRegistry from "@/app/lib/registry";
import StoreProvider from "@/app/StoreProvider";
import { useQuery } from "@tanstack/react-query"
import { render, screen, within } from "@testing-library/react"

export function useCustomHook() {
    return useQuery({
        queryKey: ["products", { page: "1", rows: "10", sortBy: "name", orderBy: "ASC" }],
        queryFn: getProducts
    })
}

describe("API from MKS Sistemas", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("shows loading skeleton", async () => {

        jest.mock('@tanstack/react-query', () => ({
            useQuery: jest.fn().mockReturnValue(({ data: undefined, isLoading: true, error: null }))
        }));

        render(
            <StoreProvider>

                <ReactQueryProvider>

                    <StyledComponentsRegistry>
                        <ProductsGrid />
                    </StyledComponentsRegistry>

                </ReactQueryProvider>

            </StoreProvider>
        )

        // Check if Loading Container is on DOC
        const loadingContainer = screen.getByTestId("loading-container")
        const loadingSkeletonCard = within(loadingContainer).getAllByRole("listitem")
        expect(within(loadingContainer).getAllByRole("listitem")).toEqual(loadingSkeletonCard)

    })

})