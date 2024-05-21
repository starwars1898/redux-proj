import React, { useState, useEffect } from "react"
import '../assets/styles/globals.css'
import { useRouter } from 'next/router'
import { HomePageRoute } from "../utils/helper"
import { GotoPage } from "../utils/helper"
import { store } from "../utils/store"
import { Provider } from 'react-redux'

export function MyApp({ Component, pageProps }) {

    const router = useRouter()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        return HomePageRoute(router, setLoading)
    }, [router])
    
    useEffect(() => {
        GotoPage(router, 'home')
    }, [])

    return (
        <>
            {
                loading 
                ?   <h1>Loading...</h1> 
                :   <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
            }
        </>
    )
    
}

export default MyApp