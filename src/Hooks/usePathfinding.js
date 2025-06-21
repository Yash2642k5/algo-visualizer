import { useContext } from "react"
import { PathFindingContext } from "../Context/PathFindingAlgorithmContext/PathFindingContext"

export const usePathfinding = () => {
    const context = useContext(PathFindingContext)

    if (!context) {
        throw new Error("usePathfinding must be used within a PathfindingProvider")
    }

    return context;
}