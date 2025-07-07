import { createContext, useState } from "react";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../../utils/constants";

export const TileContext = createContext(
    {
        startTile: START_TILE_CONFIGURATION,
        setStartTile: (startTile) => {},
        endTile: END_TILE_CONFIGURATION,
        setEndTile: (endTile) => {},
    }
)

export const TileContextProvider = ({children}) => {
    const [startTile, setStartTile] = useState(START_TILE_CONFIGURATION)
    const [endTile, setEndTile] = useState(END_TILE_CONFIGURATION)
    return(
        <TileContext.Provider
        value={{
            startTile,
            setStartTile,
            endTile,
            setEndTile,
        }}>
            {children}
        </TileContext.Provider>
    )
}