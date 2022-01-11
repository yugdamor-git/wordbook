import React from 'react'

const Browse = () => {

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    return (
        <div className="block p-6 max-w-full bg-white rounded-lg shadow-sm hover:shadow-md">
            <div className="grid grid-cols-6 gap-1 lg:grid-cols-12 gap-1 md:grid-cols-8" >
                {alphabet.map((item)=>(
                    
                    <div key={item} className="bg-primary-300 p-2 h-10 w-10 rounded text-center text-md font-bold text-white hover:shadow-lg hover:transition-colors hover:from-primary-300/40 hover:to-primary-400/40 hover:via-primary-300/40 hover:bg-gradient-to-tr">{item.toUpperCase()}</div>

                ))}
            </div>
        </div>
    )
}

export default Browse
