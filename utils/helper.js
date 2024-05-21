export const HomePageRoute = (router, setLoading) => {
    const handleStart = (url) => {
        if (url !== router.asPath) {
        setLoading(true)
        }
    }

    const handleComplete = (url) => {
        if (url === router.asPath) {
        setLoading(false)
        }
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
    }
}

export const GotoPage = (router, page) => router.push(`/${page}`)