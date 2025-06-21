import React, { useState } from 'react'
import MazeGeneratorSelect from './MazeGeneratorSelect'
import { usePathfinding } from '../../../../../Hooks/usePathfinding'
import { useTile } from '../../../../../Hooks/useTile'
import { EXTENDED_SLEEP_TIME, MAZES, PATHFINDING_ALGORITHMS, SLEEP_TIME, SPEEDS } from '../../../../../utils/constants'
import { runMazeAlgorithm } from '../../../../../utils/runMazeAlgorithm'
import { useSpeed } from '../../../../../Hooks/useSpeed'
import { resetGrid } from '../../../../../utils/resetGrid'
import PlayButton from './PlayButton'
import { runPathFindingAlgo } from '../../../../../utils/runPathFindingAlgo'
import { animatePath } from '../../../../../utils/animatePath'
function NavBar({isVisualizationRunningRef}) {
    const [isDisabled, setIsDisabled] = useState(false)
    const {maze, setMaze, grid,setGrid,isGraphVisualized , setIsGraphVisualized, algorithm, setAlgorithm} = usePathfinding()
    const {startTile, endTile} = useTile()
    const {speed, setSpeed} = useSpeed()

    const handleGenerateMaze = (maze) => {
        if (maze === 'NONE') {
            setMaze(maze)
            resetGrid({grid, startTile, endTile})
            return
        }

        setMaze(maze)
        setIsDisabled(true)
        runMazeAlgorithm({
            maze,
            grid,
            startTile,
            endTile,
            setIsDisabled,
            speed,
        })

        const newGrid = grid.slice()
        setGrid(newGrid)
        setIsGraphVisualized(false)
    }

    const handlerRunVisualizer = () => {
        if(isGraphVisualized) {
            setIsGraphVisualized(false)
            resetGrid({grid: grid.slice(), startTile, endTile})
            return 
        }

        const {traversedTiles, path} = runPathFindingAlgo ({
                algorithm,
                grid,
                startTile,
                endTile,
        }
        )
        animatePath(traversedTiles, path, startTile, endTile, speed)
        setIsDisabled(true)
        isVisualizationRunningRef.current = true
        setTimeout(() => {
            const newGrid = grid.slice()
            setGrid(newGrid)
            setIsGraphVisualized(true)
            setIsDisabled(false)
            isVisualizationRunningRef.current = false

        }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed).value)
    }

    return (
        <div className='flex items justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0 text-white'>
            <div className='flex items-center lg:justify-between justify-center w-full sm:w-[52rem]'>
            <h1 className='md:flex hidden w-[50%] text-2xl pl-1'>
                Pathfinding Visualizer: Maze Version
            </h1>
            <div className='flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4'>
                <MazeGeneratorSelect 
                label={'Maze'}
                value={maze}
                options={MAZES}
                onChange={(e) => {
                    handleGenerateMaze(e.target.value)
                }}
                />
                <MazeGeneratorSelect
                label={'Graph'}
                value={algorithm}
                options={PATHFINDING_ALGORITHMS}
                onChange={(e) => {
                    setAlgorithm(e.target.value)
                }}
                />
                <MazeGeneratorSelect
                label={'Speed'}
                value={speed}
                options={SPEEDS}
                onChange={(e) => {
                    setSpeed(parseFloat(e.target.value))
                }}
                />
                <PlayButton
                isDisabled={isDisabled}
                isGraphVisualized={isGraphVisualized}
                handleRunVisualizer={handlerRunVisualizer}
                />
            </div>
            </div>
        </div>
    )
}

export default NavBar