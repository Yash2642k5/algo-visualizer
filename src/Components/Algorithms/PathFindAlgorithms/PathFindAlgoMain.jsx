import React, { useRef } from 'react'
import { PathFindingProvider } from '../../../Context/PathFindingAlgorithmContext/PathFindingContext'
import { TileContextProvider } from '../../../Context/PathFindingAlgorithmContext/TileContext'
import {SpeedContextProvider} from '../../../Context/PathFindingAlgorithmContext/SpeedContext'
import Grid from './pathFindComponents/Grid/Grid'
import NavBar from './pathFindComponents/NavBar/NavBar'

function PathFindAlgoMain() {
    const isVisualizationRunningRef = useRef(false)
    return (
        <PathFindingProvider>
            <TileContextProvider>
                <SpeedContextProvider>
                    <div className='h-screen w-screen flex flex-col bg-gray-900'>
                        <NavBar isVisualizationRunningRef={isVisualizationRunningRef}/>
                        <Grid isVisualizationRunningRef={isVisualizationRunningRef}/>
                    </div>
                </SpeedContextProvider>
            </TileContextProvider>
        </PathFindingProvider>
    )
}

export default PathFindAlgoMain