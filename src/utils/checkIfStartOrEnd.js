import { MAX_COLS, MAX_ROWS } from "./constants"

export const checkIfStartOrEnd = (row, col) => {
    return (row === 1 && col === 1) || (row === MAX_ROWS-2 && col === MAX_COLS-2)
}