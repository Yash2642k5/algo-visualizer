import React, { useState, useEffect } from 'react'
import menuLogo from '../../assets/menu-svgrepo-com.svg'
import companyLogo from '../../assets/algovisualizer.png'
import { NavLink } from 'react-router-dom'
import { ImCross } from "react-icons/im";
import { IoMenu } from "react-icons/io5";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    //if window becomes big while menuOpen
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 640) {
            setIsMenuOpen(false);
        }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    //for disable scrolling while menuOpen
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);
    return (
        <div className='bg-black p-4'>
            <div className='flex items-center justify-between'>
                    <img src={companyLogo} alt="Logo" className="w-12 h-12" />

                <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
                    {!isMenuOpen ? (
                    <IoMenu
                        className="w-10 h-10 text-white"
                        onClick={() => setIsMenuOpen(true)}
                    />
                    ) : (
                    <ImCross
                        className="w-10 h-10 fixed text-white z-50"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    )}
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

                {isMenuOpen && (
                    <nav className="text-white gap-6 font-dmsans text-xl fixed inset-0 bg-black backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 sm:hidden opacity-95">
                        <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `opacity-70 hover:opacity-100 ${
                            isActive ? "text-blue-400 opacity-100" : "text-white"
                            }`
                        }
                        >
                        Home
                        </NavLink>
                        <NavLink
                        to="/algorithms"
                        className={({ isActive }) =>
                            `opacity-70 hover:opacity-100 ${
                            isActive ? "text-blue-400 opacity-100" : "text-white"
                            }`
                        }
                        >
                        Algorithms
                        </NavLink>
                        <NavLink
                        to="/about_us"
                        className={({ isActive }) =>
                            `opacity-70 hover:opacity-100 ${
                            isActive ? "text-blue-400 opacity-100" : "text-white"
                            }`
                        }
                        >
                        About
                        </NavLink>
                    </nav>
                )}
            </div>
        </div>
    )
}

export default Navbar