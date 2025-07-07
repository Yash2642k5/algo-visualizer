import React from 'react'
import { useEffect,useRef } from 'react';
import { useNavigate } from 'react-router';
import AlgorithmLogo from '../../assets/algorithm-icon.svg'

function AlgorithmInfoCard({title, description, relativePath}) {
    const navigateToPathFind = useNavigate()
    return (
        <div  className='border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative' onClick={() => navigateToPathFind(`${relativePath}`)}>
            <div className='relative inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>
                <img src={AlgorithmLogo} className='absolute w-full h-full'/>
            </div>
            <h3 className='mt-6 font-bold'>{title}</h3>
            <p className='mt-2 text-white/70'>{description}</p>
        </div>
    )
}

export default AlgorithmInfoCard