import { createContext, useState } from "react";

export const SpeedContext = createContext(
    {
        speed: 1,
        setSpeed: (speed) => {},
    }
)

export const SpeedContextProvider = ({children}) => {
    const [speed, setSpeed] = useState(1)
    return (
        <SpeedContext.Provider
            value={{
                speed,
                setSpeed,
            }}>
            {children}
        </SpeedContext.Provider>
    )
}