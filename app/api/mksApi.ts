const BASE_URL_MKS_API = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1"

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