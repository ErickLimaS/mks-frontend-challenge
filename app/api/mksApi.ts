
const BASE_URL = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1"

// Fetchs products by params
export async function getProducts(page: string, rows: string, sortBy: "id" | "name" | "price", orderBy: "DESC" | "ASC") {

    const params = {
        page: page,
        rows: rows,
        sortBy: sortBy,
        orderBy: orderBy
    }

    const response = await fetch(`${BASE_URL}/products?` + new URLSearchParams(params)).then(res => res.json())

    return response

}