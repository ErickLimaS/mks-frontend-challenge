'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/app/lib/Redux/store'
import { EnhancedStore } from '@reduxjs/toolkit'

export default function StoreProvider({
    children,
    testMockStore
}: {
    children: React.ReactNode,
    testMockStore?: EnhancedStore<any> // Used on tests
}) {

    const storeRef = useRef<AppStore>()

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    return (
        <Provider store={testMockStore || storeRef.current}>
            {children}
        </Provider>
    )
}