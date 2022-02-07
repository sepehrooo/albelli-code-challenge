import { createContext, Dispatch } from 'react'
import { Actions, CanvasState, initialState } from './canvasReducer'

export default createContext<{
    state: CanvasState
    dispatch: Dispatch<Actions>
}>({ state: initialState, dispatch: () => null })
