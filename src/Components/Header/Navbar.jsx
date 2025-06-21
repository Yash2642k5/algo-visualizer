import React from 'react'
import menuLogo from '../../assets/menu-svgrepo-com.svg'
import companyLogo from '../../assets/algovisualizer.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-black p-4'>
            <div className='flex items-center justify-between'>
                    <img src={companyLogo} alt="Logo" className="w-12 h-12" />

                <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
                    <img src={menuLogo} id='menu' alt="menu" className='w-10 h-10'></img>
                </div>
                <nav className='text-white gap-6 font-dmsans text-xl hidden sm:flex'>
                    <NavLink to='/' className={({isActive})=>{
                        return `opacity-70 hover:opacity-100 ${(isActive) ? "text-blue-400 opacity-100" : "text-white"}`
                    }}>
                        Home
                    </NavLink>
                    <NavLink to='/algorithms' className={({isActive})=>{
                        return `opacity-70 hover:opacity-100 ${(isActive) ? "text-blue-400 opacity-100" : "text-white"}`
                    }}>
                        Algorithms
                        </NavLink>
                    <NavLink to='/about_us' className={({isActive})=>{
                        return `opacity-70 hover:opacity-100 ${(isActive) ? "text-blue-400 opacity-100" : "text-white"}`
                    }}>
                        About
                        </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Navbar