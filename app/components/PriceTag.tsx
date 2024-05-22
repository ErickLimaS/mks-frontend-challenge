import React from 'react'
import { convertPriceToBrl } from '../lib/priceToBrl'

function PriceTag({ price, customBgcOnLgDisplay }: { price: string, customBgcOnLgDisplay?: boolean }) {
    return (

        <div className={`flex items-center bg-[#373737] ${customBgcOnLgDisplay ? "lg:bg-transparent" : ""} font-bold text-[15px] text-white ${customBgcOnLgDisplay ? "lg:text-black" : ""} py-2 md:py-1 px-4 md:px-2 rounded-[5px]`}>

            R${convertPriceToBrl(price)}

        </div>

    )
}

export default PriceTag