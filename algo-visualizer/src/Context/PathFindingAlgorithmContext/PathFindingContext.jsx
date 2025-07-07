import React, { createContext, useState } from 'react'
import { createGrid } from '../../utils/createGrid';
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from '../../utils/constants';

export const PathFindingContext = createContext(
    {
        algorithm: "BFS",
        setAlgorithm: (algorithm) => {},
        maze: "none",
        setMaze: (maze) => {},
        grid: [],
        setGrid: (grid) => {},
        isGraphVisualized: false,
        setIsGraphVisualized: (isGraphVisualized) => {},
    }
)

export const PathFindingProvider = ({children}) => {
    const [algorithm, setAlgorithm] = useState("BFS")

    const [maze, setMaze] = useState("NONE")

    const [grid, setGrid] = useState(createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION))

    const [isGraphVisualized, setIsGraphVisualized] = useState(false)
    
    return(
        <PathFindingContext.Provider 
        value={{ 
            algorithm, setAlgorithm, 
            maze, setMaze, 
            grid, setGrid, 
            isGraphVisualized, setIsGraphVisualized 
        }}>
            {children}
        </PathFindingContext.Provider>
    )
}
