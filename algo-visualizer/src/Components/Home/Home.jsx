import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

    function Home() {
        const navigateToContactPage = useNavigate();
        return (
            <div className='bg-black text-white bg-gradient-to-b from-[#000] via-[#200D42] via-[#4F21A1] to-[#A46EDB] p-[72px] sm:py-24 relative overflow-hidden'>
                <div className='absolute h-[400px] w-[800px] sm:w-[1536px] sm:h-[768px] lg:w-[5400px] lg:h-[2700px] bg-black rounded-[100%] left-1/2 -translate-x-1/2 
            border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] lg:bg-[radial-gradient(closest-side,#000_96%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] animate-fade-in' ></div>
                <div className='container max-w-full font-dmsans text-xl relative'>
                    <div className='flex items-center justify-center'>
                    <span className='bg-gradient-to-r from-[#F87AFF] via-[#FB93D0] via-[#FFDD99] via-[#C3F0B2] to-[#2FD8FE] text-transparent bg-clip-text'>check out our algorithm visualizers&ensp;</span>
                    <NavLink to='/algorithms' className={`border px-2 py-1 rounded-lg border-white/50`}>
                        <span>click here!</span>
                    </NavLink>
                    </div>
                    <div className='flex justify-center'>
                        <h1 className='text-7xl sm:text-9xl font-bold tracking-tight text-center mt-8 inline-flex'>Visualize Like <br/> Never Before</h1>
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-center text-xl mt-8 max-w-md'>
                        The aim of this website is to provide smooth and clarifying simulations of given algorithms to the users for better understanding.
                    </p>
                    </div>
                    <div className='flex justify-center mt-8'>
                        <button className='bg-white text-black py-3 px-5 rounded-lg font-medium' onClick={()=> navigateToContactPage('/contact')}>Contact Us</button>
                    </div>
                </div>
            </div>
        )
    }

export default Home