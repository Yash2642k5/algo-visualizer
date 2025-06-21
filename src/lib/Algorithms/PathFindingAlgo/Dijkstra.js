import { dropFromQueue } from "../../../utils/dropFromQueue"
import { getUntraversedNeighbours } from "../../../utils/getUntraversedNeighbours"
import { isEqual } from "../../../utils/isEqual"

export const Dijkstra = (
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
    const untraversedTiles = [base]

    while(untraversedTiles.length)
    {
        untraversedTiles.sort((a,b) => a.distance - b.distance)
        const tile = untraversedTiles.shift()
        if (tile)
        {
            if (tile.isWall) continue
            if (tile.distance === Infinity) break
            tile.isTraversed = true
            traversedTiles.push (tile)
            if (isEqual(tile, endTile)) break

            const neighbors = getUntraversedNeighbours(grid, tile)
            for(let i = 0; i<neighbors.length; i++)
            {
                if(tile.distance + 1 < neighbors[i].distance)
                {
                    dropFromQueue(neighbors[i], untraversedTiles)
                    neighbors[i].distance = tile.distance + 1
                    neighbors[i].parent = tile
                    untraversedTiles.push(neighbors[i])
                }
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