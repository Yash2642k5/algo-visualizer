import React from 'react'
import { NavLink } from "react-router";

function Banner() {
    return (
        <div className='py-3 text-center bg-gradient-to-r from-[#FCD6FF] via-[#29D8FF] via-[#FFFD80] via-[#F89ABF] to-[#FCD6FF]'>
            <div className='font-dmsans container mx-auto'>
            <p className='font-medium'>
                <span className='hidden sm:inline text-xl'>Impressed? find out more - </span>
                <NavLink to="/about_us" className={({isActive})=>{ return `underline underline-offset-4 text-xl ${isActive ? "text-blue-500" : "text-black"}`}}>
                About Us
            </NavLink>
            </p>
            
            </div>
        </div>
    )
}

export default Banner