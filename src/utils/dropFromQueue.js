import { isEqual } from "./isEqual"

export const dropFromQueue = (tile, queue) => {
    for(let i = 0; i< queue.length; i++)
    {
        if (isEqual(tile, queue[i]))
        {
            queue.splice(i,1)
            break
        }
    }
}