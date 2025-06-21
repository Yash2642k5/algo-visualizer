import { useContext } from "react"
import { TileContext } from "../Context/PathFindingAlgorithmContext/TileContext"

export const useTile = () => {
    const context = useContext(TileContext)

    if(!context)
    {
        throw new Error("useTile must be used within a TileContextProvider")
    }
    return context
}