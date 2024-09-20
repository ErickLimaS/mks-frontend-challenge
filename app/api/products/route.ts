import { NextResponse } from "next/server";
import ProductsData from "./productsList.json"

export async function GET() {

    return NextResponse.json({
        products: ProductsData
    }, {
        status: 200
    })

}