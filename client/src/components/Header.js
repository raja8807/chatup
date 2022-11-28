import React from 'react'

import logoFull from '../assets/logo-full.png'

const Header = () => {
    return (
        <header className='z-10 sticky top-0 shadow-xl bg-primary h-12 flex items-center justify-center'>
            <img src={logoFull} className="h-full p-2"/>
        </header>
    )
}

export default Header