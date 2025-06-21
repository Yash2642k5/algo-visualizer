import React, { useRef } from 'react'
import { usePathfinding } from '../../../../../Hooks/usePathfinding'
import { MAX_COLS, MAX_ROWS } from '../../../../../utils/constants'
import Tile from './Tile'
import { checkIfStartOrEnd } from '../../../../../utils/checkIfStartOrEnd'
import { createNewGrid } from '../../../../../utils/createNewGrid'
function Grid({isVisualizationRunningRef}) {
    const {grid, setGrid} = usePathfinding()
    const isMouseDownRef = useRef(false)

    const handleMouseDown = (row, col) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col))
        {
            return
        }

        isMouseDownRef.current = true
        const newGrid = createNewGrid(grid, row, col)
        setGrid(newGrid)
    }

    const handleMouseUp = (row,col) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col))
        {
            return
        }

        isMouseDownRef.current = false
    }

    const handleMouseEnter = (row, col) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col))
        {
            return
        }

        if(isMouseDownRef.current == true) {
            const newGrid = createNewGrid(grid, row, col)
            setGrid(newGrid)
        }
    }

    
    return (
        <div 
        className={`flex items-center flex-col justify-center border-sky-300
        lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]
        lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px] mt-10`}>
            {
                grid.map((row, rowIndex) => (
                    <div key={rowIndex} className='flex'>
                        {
                            row.map((tile, tileIndex)=> {
                                const {isEnd, isStart, isPath, isTraversed, isWall} = tile;
                                return (
                                    <Tile
                                    key = {tileIndex}
                                    row = {tile.row}
                                    col = {tile.col}
                                    isStart={isStart}
                                    isEnd={isEnd}
                                    isTraversed={isTraversed}
                                    isWall={isWall}
                                    isPath={isPath}

                                    handleMouseDown = {() => handleMouseDown(tile.row,tile.col)}
                                    handleMouseUp = {() => handleMouseUp(tile.row,tile.col)}
                                    handleMouseEnter = {() => handleMouseEnter(tile.row,tile.col)}
                                    />
                                )
                            })
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Grid