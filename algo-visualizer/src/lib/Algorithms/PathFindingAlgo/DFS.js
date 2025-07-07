import { getUntraversedNeighbours } from "../../../utils/getUntraversedNeighbours";
import { isEqual } from "../../../utils/isEqual"
import { isInQueue } from "../../../utils/isInQueue";


export const DFS = (
    {
        grid,
        startTile,
        endTile
    }
) => {
    const traversedTiles = []
    const base = grid[startTile.row][startTile.col]
    base.distance = 0
    base.isTraversed = true
    const unTraversed = [base]

    while(unTraversed.length) {
        const tile = unTraversed.pop()
        if (tile.isWall) continue
        if (tile.distance === Infinity) break
        tile.isTraversed = true
        traversedTiles.push (tile)
        if (isEqual(tile, endTile)) break
        
        const neighbors = getUntraversedNeighbours(grid, tile)

        for (let i = 0; i < neighbors.length; i++)
        {
            if (!isInQueue(neighbors[i],unTraversed))
            {
                const neighbor = neighbors[i]
                neighbor.distance = tile.distance + 1
                neighbor.parent = tile
                unTraversed.push(neighbor)
            }
        }
    }

    const path = []
    let tile = grid[endTile.row][endTile.col]
    while (tile !== null)
    {
        tile.ispath = true
        path.unshift(tile)
        tile = tile.parent
    }

    return {traversedTiles, path}
}