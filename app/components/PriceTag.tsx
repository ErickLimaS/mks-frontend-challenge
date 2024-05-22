import React from 'react'

function PriceTag({ price }: { price: string }) {
    return (

        <div className='bg-[#373737] font-bold text-[15px] text-white py-2 md:py-1 px-4 md:px-2 rounded-[5px]'>

            R${Number(price).toLocaleString("pt-BR", { style: "decimal", currency: "BRL" })}
            
        </div>

    )
}

export default PriceTag