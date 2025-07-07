import { BASE_TILE_STYLE, END_TILE_CONFIGURATION, MAX_ROWS,MAX_COLS, START_TILE_CONFIGURATION } from "./constants";
import { isEqual } from './isEqual'

export const resetGrid = ({
    grid,
    startTile = START_TILE_CONFIGURATION,
    endTile = END_TILE_CONFIGURATION
}) => {
    for(let row = 0; row<MAX_ROWS; row++)
    {
        for(let col = 0; col < MAX_COLS; col++)
        {
            const tile = grid[row][col]
            tile.distance = Infinity
            tile.isTraversed = false
            tile.isPath = false
            tile.parent = null
            tile.isWall = false

            if(!isEqual(startTile, tile) && !isEqual(endTile, tile))
            {
                const tileElement = document.getElementById(`${tile.row}-${tile.col}`)
                if(tileElement) {
                    tileElement.className = BASE_TILE_STYLE
                }

                if(tile.row === MAX_ROWS -1)
                {
                    tileElement?.classList.add("border-b")
                }
                if(tile.col === 0)
                {
                    tileElement?.classList.add("border-l")
                }
            }
        }
    }
}