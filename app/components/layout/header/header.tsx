import Link from 'next/link'
import React from 'react'
import CartButton from './cartBtn'

function Header() {
    return (
        <header className='bg-primary'>

            <nav className='container flex justify-between items-center md:py-5'>
                <div>
                    <Link
                        href={`/`}
                        className='flex gap-x-2 items-center'
                        aria-label='MKS Sistemas'
                    >
                        <span className='font-semibold text-white text-[32px] md:text-[40px]'>MKS</span>
                        <span className='font-light text-white text-base md:text-xl mt-1'>Sistemas</span>
                    </Link>
                </div>

                <div>
                    <CartButton />
                </div>
            </nav>

        </header>
    )
}

export default Header