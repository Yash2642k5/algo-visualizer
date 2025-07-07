import { createTile } from "./createTile"

export const MAX_ROWS = 39
export const MAX_COLS = 49

export const START_TILE_CONFIGURATION = createTile(
    1,  // row
    1,  // col
    false,  // isEnd
    false,  // isWall
    false,  // isPath
    0,  // distance
    true,  // isStart
    false,  // isTraversed
    null  // parent
)

export const END_TILE_CONFIGURATION = createTile(
    MAX_ROWS - 2,  // row
    MAX_COLS - 2,  // col
    true,  // isEnd
    false,  // isWall
    false,  // isPath
    0,  // distance
    false,  // isStart
    false,  // isTraversed
    null  // parent
)

export const BASE_TILE_STYLE = "lg:w-[22px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[20px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border border-sky-200"

export const TRAVERSED_TILE_STYLE = BASE_TILE_STYLE + " bg-cyan-400"

export const START_TILE_STYLE = BASE_TILE_STYLE + " bg-green-400"

export const END_TILE_STYLE = BASE_TILE_STYLE + " bg-red-400"

export const WALL_TILE_STYLE = BASE_TILE_STYLE + " bg-gray-400"

export const PATH_TILE_STYLE = BASE_TILE_STYLE + " bg-green-500"


export const MAZES = [
    {
        name: "Custom Maze", value: "NONE"
    },
    {
        name: "Binary Tree", value: "BINARY_TREE"
    },
]

export const PATHFINDING_ALGORITHMS = [
    {
        name: 'Breath First Search', value: 'BFS'
    },
    {
        name: 'Depth First Search', value: 'DFS'
    }
]

export const SPEEDS = [
    {
        name: 'Slow', value: 2
    },
    {
        name: 'Medium', value: 1
    },
    {
        name: 'Fast', value: 0.5
    },
]

export const SLEEP_TIME = 8
export const EXTENDED_SLEEP_TIME = 30


export const ResursiveAlgo = [
    {
        name: 'Fibonacci' , value: 'fib'
    },
    {
        name: 'Factorial', value: 'fact'
    }
]