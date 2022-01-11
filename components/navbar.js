import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';

import { rawItems } from '../components/data/metadata'

function Navbar() {
    let router = useRouter();
    function getMenuItems(){

        let current_path = router.pathname;

        let menuItems = [];
        

        for(let item of rawItems)
        {
            menuItems.push(
                <li key={item.name}>
                    <Link href={item.path}>
                    <a className={current_path === item.path ? 'transition-colors from-primary-300/40 to-primary-400/40 via-primary-300/40 bg-gradient-to-tr dark:text-transparent':''+ "transition-colors bg-primary-300/0 dark:group-hover:bg-primary-300/0 group-hover:bg-primary-300/20 dark:text-transparent dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text"}>
                        <span className={current_path === item.path ? 'transition-colors from-primary-300/40 to-primary-400/40 via-primary-300/40 bg-gradient-to-tr dark:text-transparent text-sm md:text-lg':''+'text-sm md:text-lg hover:bg-primary-300/20 hover:transition-colors bg-primary-300/0 dark:group-hover:bg-primary-300/0 group-hover:bg-primary-300/20 dark:text-transparent dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text'}>
                        {item.name}
                        {console.log(rawItems)}
                        {console.log(`current path :  ${current_path}`)}
                        </span>

                    </a>
                    </Link>
                </li>
            )
        }

        return menuItems


    }

    return (
        <div className="sticky top-0 z-50 transition-shadow shadow-sm bg-white">
            <div className="h-2 bg-gradient-to-tr from-primary-200 via-primary-300 to-primary-400"></div>
            <nav className="flex justify-between items-center py-2 px-10">
                
                <ul className="flex space-x-3 text-xs md:space-x-4 md:text-base">
                {getMenuItems()}

                </ul>

                <button className="p-2.5 rounded-md focus:outline-none border dark:border-gray-600 dark:hover:border-primary-300 dark:hover:text-primary-300 hover:text-primary-300 hover:border-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300 focus-visible:text-primary-300 focus-visible:border-primary-300">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                </button>
            </nav>
        </div>
    )
}

export default Navbar
