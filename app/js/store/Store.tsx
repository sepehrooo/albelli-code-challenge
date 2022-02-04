import React, {
    createContext,
    Dispatch,
    ReactElement,
    useMemo,
    useReducer,
} from 'react'
import {
    Actions,
    canvasReducer,
    CanvasState,
    initialState,
} from './canvasReducer'

export const Store = createContext<{
    state: CanvasState
    dispatch: Dispatch<Actions>
}>({ state: initialState, dispatch: () => null })

export function StoreProvider({
    children,
}: {
    children: JSX.Element
}): ReactElement {
    const [state, dispatch] = useReducer(canvasReducer, initialState)
    const contextValue = useMemo(() => {
        return { state, dispatch }
    }, [state, dispatch])
    return <Store.Provider value={contextValue}>{children}</Store.Provider>
}
