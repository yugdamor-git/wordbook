import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { rawItems } from './data/metadata'
import Footer from './footer'
import Navbar from './navbar'
import Head from 'next/head'

const Layout = ({ children }) => {

    const router = useRouter();

    let current_path = router.pathname;

    let title = "";

    for(let item of rawItems)
    {
        if(item.path === current_path)
        {
            title = item.name
        }
    }

    return (
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            <title>{title}</title>
        </Head>
        <Navbar/>
        <div className="container mx-auto px-5 py-2">
        <main>
            { children }
        </main>
        </div>
        <Footer/>
        </>
    )
}

export default Layout
