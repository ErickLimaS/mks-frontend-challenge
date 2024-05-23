"use client"
import { getProducts } from '@/app/api/mksApi'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ProductCard from '../ProductCard'
import { AnimatePresence, motion } from 'framer-motion'
import simulateRange from '@/app/lib/simulateRange'

const opacityStaggerAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.4,
            staggerChildren: 0.120,
        },
    },
    exit: {
        opacity: 0,
    },
}

function ProductsGrid() {

    const { data, error, isLoading } = useQuery({
        queryKey: ["products", { page: "1", rows: "10", sortBy: "name", orderBy: "ASC" }],
        queryFn: getProducts
    })

    if (error) {
        return (
            <div className='min-w-[90vw] m-auto'>
                <h2 className='text-4xl font-bold text-red-600 text-center'>
                    Error: <span className='text-4xl font-bold text-black/80'>{error.message}</span>
                </h2>
            </div>
        )
    }

    return (
        <AnimatePresence mode='wait'>
            {isLoading ? (

                <motion.ul
                    variants={opacityStaggerAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 justify-items-center"
                >

                    {simulateRange(8).map((index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0.6 }}
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="min-h-[355px] min-w-[245px] md:min-w-[202px] lg:min-w-[245px] bg-black/35 rounded-lg"
                        />
                    ))}

                </motion.ul>

            ) : (

                <motion.ul
                    variants={opacityStaggerAnimation}
                    initial="initial"
                    animate="animate"
                    className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 justify-items-center"
                >

                    {(data.products as ProductType[]).map(item => (

                        <motion.li
                            key={item.name}
                            variants={opacityStaggerAnimation}
                            className="w-8/12 sm:w-4/5 md:w-full max-h-[365px]"
                        >
                            <ProductCard
                                data={item}
                            />
                        </motion.li>

                    ))}

                </motion.ul>

            )}
        </AnimatePresence >
    )
}

export default ProductsGrid