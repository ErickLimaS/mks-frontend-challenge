import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import CheckoutSidebar from './checkoutSidebar'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>

            <Header />

            {children}

            <CheckoutSidebar />

            <Footer />

        </React.Fragment>
    )
}

export default Layout