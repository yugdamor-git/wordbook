import React from 'react'
import { website_name } from './data/metadata'


const Footer = () => {
    return (
        <div className="bg-gradient-to-tr from-primary-200 via-primary-300 to-primary-400">
            <footer className="text-center text-white">
  

  <div className="text-center p-6 font-normal">
    © 2021 Copyright
    <a className="font-medium" href="https://tailwind-elements.com/"> {website_name}</a>
  </div>
</footer>
        </div>
    )
}

export default Footer
