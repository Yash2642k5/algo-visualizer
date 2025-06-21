export const createTile = (row = 0, col = 0, isEnd = false, isWall = false, isPath = false, distance = Infinity, isStart = false,isTraversed = false, parent = null) => ({
    row,         // Number: Initial row index
    col,         // Number: Initial column index
    isEnd,       // Boolean: Whether this tile is the end point
    isWall,      // Boolean: Whether this tile is a wall
    isPath,      // Boolean: Whether this tile is part of the path
    distance,    // Number: Distance used in pathfinding algorithms (default Infinity for Dijkstra)
    isStart,     // Boolean: Whether this tile is the start point
    isTraversed,
    parent       // Object or null: Reference to the previous tile (used in path reconstruction)
});