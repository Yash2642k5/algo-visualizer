import { BASE_TILE_STYLE } from "./constants"
import { SPEEDS } from "./constants"
import { sleep } from './sleep'

export const destroyWall = async (
    grid,
    row, 
    col,
    isRight,
    speed,
) => {
    if(isRight && grid[row][col+1])
    {
        grid[row][col+1].isWall = false
        grid[row-1][col].isWall = false
        document.getElementById(`${row}-${col+1}`).className = BASE_TILE_STYLE
        document.getElementById(`${row-1}-${col}`).className = BASE_TILE_STYLE
        await sleep( 20 * SPEEDS.find((s) => s.value === speed)?.value - 5)
    }
    else if (grid[row+1]) {
        grid[row+1][col].isWall = false
        document.getElementById(`${row+1}-${col}`).className = BASE_TILE_STYLE
        await sleep( 20 * SPEEDS.find((s) => s.value === speed)?.value - 5)
    }
    else{
        grid[row][col].isWall = false
        document.getElementById(`${row}-${col}`).className = BASE_TILE_STYLE
        await sleep( 20 * SPEEDS.find((s) => s.value === speed)?.value - 5)
    }
}