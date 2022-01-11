import { useRouter } from 'next/dist/client/router'
import React from 'react'

const En = () => {
    const router = useRouter()
    // console.log(router.pathname)
    return (
        <div>
            <h1>{router.asPath}</h1>
        </div>
    )
}

export default En
