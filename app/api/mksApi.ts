const BASE_URL_MKS_API = "https://mks-frontend-challenge-beige-two.vercel.app/api"

// Fetchs products by params
export async function getProducts(
    { queryKey }: {
        queryKey: [
            string, {
                page: string;
                rows: string;
                sortBy: string;
                orderBy: string;
            }]
    }) {

    return fetch(`${BASE_URL_MKS_API}/${queryKey[0]}?` + new URLSearchParams(queryKey[1])).then(res => res.json())

}