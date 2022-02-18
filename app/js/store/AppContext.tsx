import React, { createContext, Dispatch, ReactElement, useReducer } from 'react'
import useCustomMemo from '../hooks/useCustomMemo'
import { CanvasProps } from '../interfaces/CanvasProps.interface'
import { Actions, canvasReducer, initialState } from './canvasReducer'

export const AppContext = createContext<{
    state: CanvasProps
    dispatch: Dispatch<Actions>
}>({ state: initialState, dispatch: () => null })

export function AppContextProvider({
    children,
}: {
    children: JSX.Element
}): ReactElement {
    const [state, dispatch] = useReducer(canvasReducer, initialState)
    const contextValue = useCustomMemo(() => {
        return { state, dispatch }
    }, [state, dispatch])
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}
