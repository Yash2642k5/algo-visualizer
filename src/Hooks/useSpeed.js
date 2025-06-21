import { useContext } from "react"
import { SpeedContext } from "../Context/PathFindingAlgorithmContext/SpeedContext"

export const useSpeed = () => {
    const context = useContext(SpeedContext)

    if(!context)
    {
        throw new Error("useSpeed must be used within a SpeedProvider")
    }

    return context
}