import React from 'react'
import { BASE_TILE_STYLE, END_TILE_STYLE, MAX_ROWS, PATH_TILE_STYLE, START_TILE_STYLE, TRAVERSED_TILE_STYLE, WALL_TILE_STYLE } from '../../../../../utils/constants'

function Tile(
    {
        row,
        col,
        isStart,
        isEnd,
        isTraversed,
        isWall,
        isPath,
        handleMouseDown,
        handleMouseUp,
        handleMouseEnter,
    }
) 
{
    let tileTypeStyle
    
    if(isStart)
    {
        tileTypeStyle = START_TILE_STYLE
    }
    else if(isEnd)
    {
        tileTypeStyle = END_TILE_STYLE
    }
    else if(isWall)
    {
        tileTypeStyle = WALL_TILE_STYLE
    }
    else if(isPath)
    {
        tileTypeStyle = PATH_TILE_STYLE
    }
    else if(isTraversed)
    {
        tileTypeStyle = TRAVERSED_TILE_STYLE
    }
    else
    {
        tileTypeStyle = BASE_TILE_STYLE
    }


    const borderStyle = (row === MAX_ROWS-1) ? "border-b" : (col === 0) ? 'border-l' : ''

    const edgeStyle = (row === MAX_ROWS-1 && col === 0) ? 'border-l' : ''
return (
    <div className={`${tileTypeStyle} ${borderStyle} ${edgeStyle}`} id={`${row}-${col}`}
    onMouseDown={() => handleMouseDown(row,col)}
    onMouseUp={() => handleMouseUp(row,col)}
    onMouseEnter={() => handleMouseEnter(row,col)}></div>
)
}

export default Tile