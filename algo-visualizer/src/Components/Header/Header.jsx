import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='overflow-hidden'>
        <Banner/>
        <Navbar/>
        </div>
    )
}

export default Header