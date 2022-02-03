export const MOVE_RIGHT = 'APP/IMAGE_EDITOR/MOVE_RIGHT' as const

export type Actions = { type: typeof MOVE_RIGHT }

export interface PhotoState {
    id?: string | null
    width?: number | null
    height?: number | null
    x?: number | null
    y?: number | null
}

export const initialState: PhotoState = {
    id: null,
    width: null,
    height: null,
    x: 0,
    y: 0,
}

export const moveRight = (): Actions => ({ type: MOVE_RIGHT })

export const canvasReducer = (
    state: PhotoState = initialState,
    action: Actions = { type: MOVE_RIGHT }
): PhotoState => {
    switch (action.type) {
        case MOVE_RIGHT:
            return { ...state, x: 20 }
        default:
            return state
    }
}
