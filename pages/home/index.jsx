import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
import TopBar from '../../components/navigations/topbar'
import Contents from '../../components/contents'

function HomePage() {

  return (
    <Layout>
        <Head>
            <title>Home</title>
        </Head>

        <TopBar />
        <Contents>
            
        </Contents>
    </Layout>
  )
}

export default HomePage