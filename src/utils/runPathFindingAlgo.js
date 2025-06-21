import { BFS } from "../lib/Algorithms/PathFindingAlgo/BFS"
import { DFS } from "../lib/Algorithms/PathFindingAlgo/DFS"

export const runPathFindingAlgo = (
    {
        algorithm,
        grid,
        startTile,
        endTile,
    }
) => {
    if(algorithm === 'BFS')
    {
        return BFS({grid, startTile, endTile})
    }
    else if (algorithm === 'DFS')
    {
        return DFS({grid, startTile, endTile})
    }
    else
    {
        return BFS({grid, startTile, endTile})
    }
}