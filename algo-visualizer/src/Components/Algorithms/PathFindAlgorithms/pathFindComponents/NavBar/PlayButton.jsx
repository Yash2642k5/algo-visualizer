import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { GrPowerReset } from 'react-icons/gr'


function PlayButton(
    {
        handleRunVisualizer,
        isDisabled,
        isGraphVisualized,

    }
) {
    return (
        <button
        disabled={isDisabled}
        onClick={handleRunVisualizer}
        className='disabled:pointer-events-none disabled:opacity-50 transition ease-in round-full p-2.5 shadow-md bg-green-500 hover:bg-green-600 border-none active:ring-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-30'>
            {isGraphVisualized ? <GrPowerReset className="w-5 h-5"/> : <BsFillPlayFill className="w-5 h-5"/>}
        </button>
    )
}

export default PlayButton