export const MOVE_RIGHT = 'APP/IMAGE_EDITOR/MOVE_RIGHT' as const
export const MOVE_LEFT = 'APP/IMAGE_EDITOR/MOVE_LEFT' as const
export const MOVE_UP = 'APP/IMAGE_EDITOR/MOVE_UP' as const
export const MOVE_DOWN = 'APP/IMAGE_EDITOR/MOVE_DOWN' as const
export const UPLOAD_FILE = 'App/IMAGE_EDITOR/UPLOAD' as const
export const SCALE_UP = 'App/IMAGE_EDITOR/SCALE_UP' as const
export const SCALE_DOWN = 'App/IMAGE_EDITOR/SCALE_DOWN' as const
export const ERROR_MESSAGE = 'App/IMAGE_EDITOR/ERROR_MESSAGE' as const
export type Actions =
    | { type: typeof MOVE_RIGHT }
    | { type: typeof MOVE_LEFT }
    | { type: typeof MOVE_UP }
    | { type: typeof MOVE_DOWN }
    | { type: typeof UPLOAD_FILE; payload: PhotoState }
    | { type: typeof SCALE_UP }
    | { type: typeof SCALE_DOWN }
    | { type: typeof ERROR_MESSAGE; payload: string }

export interface PhotoState {
    src?: string | null
    width: number
    height: number
    x: number
    y: number
    scale: number
    ratio: number
}

export interface CanvasState {
    width: number
    height: number
    image: PhotoState
    message: string
}

/* 
App Requirement: 15" x 10" canvas
Since industry standard print quality is 300PPI (Pixels Per Inch),
The width of the canvas would be 15" * 300PPI = 4500 Pixels 
And the height of the canvas would be 10 * 300 = 3000 Pixels
But we will style the canvas to be shown smaller (375px * 250px)
*/
export const initialState: CanvasState = {
    width: 4500,
    height: 3000,
    image: {
        src: null,
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        scale: 1,
        ratio: 1,
    },
    message: '',
}

export const moveRight = (): Actions => ({ type: MOVE_RIGHT })
export const moveLeft = (): Actions => ({ type: MOVE_LEFT })
export const moveUp = (): Actions => ({ type: MOVE_UP })
export const moveDown = (): Actions => ({ type: MOVE_DOWN })
export const scaleUp = (): Actions => ({ type: SCALE_UP })
export const scaleDown = (): Actions => ({ type: SCALE_DOWN })
export const uploadFile = (payload: PhotoState): Actions => ({
    type: UPLOAD_FILE,
    payload,
})
export const setErrorMessage = (payload: string): Actions => ({
    type: ERROR_MESSAGE,
    payload,
})

export const canvasReducer = (
    state: CanvasState = initialState,
    action: Actions = { type: MOVE_RIGHT }
): CanvasState => {
    const {
        width: canvasWidth,
        height: canvasHeight,
        image: { width, height, scale, ratio, x, y },
    } = state

    switch (action.type) {
        case MOVE_RIGHT: {
            const newX = x - 20
            const scaledImageWidth = width * scale * ratio
            if (scaledImageWidth - canvasWidth + newX >= 0) {
                return {
                    ...state,
                    image: { ...state.image, x: newX },
                    message: '',
                }
            }
            return {
                ...state,
                message: "Can't move the image anymore towards right!",
            }
        }

        case MOVE_LEFT: {
            const newX = x + 20
            if (newX <= 0) {
                return {
                    ...state,
                    image: { ...state.image, x: newX },
                    message: '',
                }
            }
            return {
                ...state,
                message: "Can't move the image anymore towards left!",
            }
        }

        case MOVE_DOWN: {
            const newY = y - 20
            const scaledImageHeight = height * scale * ratio
            if (scaledImageHeight - canvasHeight + newY >= 0) {
                return {
                    ...state,
                    image: { ...state.image, y: newY },
                    message: '',
                }
            }
            return {
                ...state,
                message: "Can't move the image anymore towards down!",
            }
        }

        case MOVE_UP: {
            const newY = y + 20
            if (newY <= 0) {
                return {
                    ...state,
                    image: { ...state.image, y: newY },
                    message: '',
                }
            }
            return {
                ...state,
                message: "Can't move the image anymore towards up!",
            }
        }

        case SCALE_UP: {
            const newScale = scale + 0.1
            return {
                ...state,
                image: { ...state.image, scale: newScale },
                message: '',
            }
        }

        case SCALE_DOWN: {
            /* 
            Checking if the newly scaled image covers canvas, 
            if not we won't update the state
            */
            const newScale = scale - 0.1
            const scaledImageWidth = width * newScale * ratio
            const scaledImageHeight = height * newScale * ratio
            if (
                scaledImageWidth >= canvasWidth &&
                scaledImageHeight >= canvasHeight
            ) {
                return {
                    ...state,
                    image: { ...state.image, scale: newScale, x: 0, y: 0 },
                    message: '',
                }
            }
            return { ...state, message: "Can't zoom out anymore!" }
        }
        case UPLOAD_FILE:
            return {
                ...state,
                image: action.payload,
                message: '',
            }
        case ERROR_MESSAGE:
            return {
                ...state,
                message: action.payload,
            }
        default:
            return state
    }
}
