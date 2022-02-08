import { createContext, Dispatch } from 'react'
import { CanvasProps } from '../interfaces/CanvasProps.interface'
import { Actions, initialState } from './canvasReducer'

export default createContext<{
    state: CanvasProps
    dispatch: Dispatch<Actions>
}>({ state: initialState, dispatch: () => null })
