export const createNewGrid = (grid, row, col) => {
    const newGrid = grid.slice();
    const newTile = {
        ...newGrid[row][col],
        isWall: !newGrid[row][col].isWall,
    }

    newGrid[row][col] = newTile
    return newGrid
}