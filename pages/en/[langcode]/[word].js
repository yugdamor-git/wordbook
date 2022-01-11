import { useRouter } from 'next/dist/client/router'
import React from 'react'

const Word = () => {
    const router = useRouter()

    return (
        <div>
            <h1>{router.asPath}</h1>        
        </div>
    )
}

export default Word
