import { isEqual } from "./isEqual";

export function isInQueue (tile, queue) {
    for (let i = 0; i < queue.length; i++) {
        if (isEqual(tile, queue[i])) return true
    }
        
    return false
    }