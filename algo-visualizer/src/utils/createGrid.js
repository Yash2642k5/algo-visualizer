import { MAX_COLS, MAX_ROWS } from "./constants"
import { createTile } from "./createTile"

const createRow = (row, startTile, endTile) =>
{
    const currentRow = []
    for(let col = 0;col < MAX_COLS; ++col)
    {
        currentRow.push(
            createTile(
                row, //row
                col, //col
                (row === endTile.row && col === endTile.col), //isEnd
                false, //isWall
                false, //isPath
                Infinity, //distance
                (row === startTile.row && col === startTile.col), //isStart
                false, //isTraversed
                null //parent
            )
        )
    }
    return currentRow
}

export const createGrid = (startTile, endTile) => {
    const grid = []

    for(let row = 0; row < MAX_ROWS; row++)
    {
        grid.push(createRow(row, startTile, endTile))
    }
    return grid
}