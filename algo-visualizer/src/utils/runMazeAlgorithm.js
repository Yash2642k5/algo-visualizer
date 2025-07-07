import { binaryTree } from "../lib/Algorithms/Maze/binaryTree"
export const runMazeAlgorithm = async (
    {
        maze,
        grid,
        startTile,
        endTile,
        setIsDisabled,
        speed
    }
) => {
    if(maze == 'BINARY_TREE') {
        await binaryTree(grid, startTile, endTile, setIsDisabled, speed)
    }
}