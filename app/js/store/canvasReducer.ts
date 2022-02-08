import { CanvasProps } from '../interfaces/CanvasProps.interface'
import { ImageProps } from '../interfaces/ImageProps.interface'
import inchToPixel from '../utils/inchToPixel'
import { canvasHeightInch, canvasWidthInch } from '../variables'

export const MOVE_RIGHT = 'APP/IMAGE_EDITOR/MOVE_RIGHT' as const
export const MOVE_LEFT = 'APP/IMAGE_EDITOR/MOVE_LEFT' as const
export const MOVE_UP = 'APP/IMAGE_EDITOR/MOVE_UP' as const
export const MOVE_DOWN = 'APP/IMAGE_EDITOR/MOVE_DOWN' as const
export const UPLOAD_FILE = 'APP/IMAGE_EDITOR/UPLOAD' as const
export const SCALE_UP = 'APP/IMAGE_EDITOR/SCALE_UP' as const
export const SCALE_DOWN = 'APP/IMAGE_EDITOR/SCALE_DOWN' as const
export const ERROR_MESSAGE = 'APP/IMAGE_EDITOR/ERROR_MESSAGE' as const
export const DEFAULT = 'APP/IMAGE_EDITOR/DEFAULT' as const

export type Actions =
    | { type: typeof MOVE_RIGHT }
    | { type: typeof MOVE_LEFT }
    | { type: typeof MOVE_UP }
    | { type: typeof MOVE_DOWN }
    | { type: typeof UPLOAD_FILE; payload: ImageProps }
    | { type: typeof SCALE_UP }
    | { type: typeof SCALE_DOWN }
    | { type: typeof ERROR_MESSAGE; payload: string }
    | { type: typeof DEFAULT }

export const initialState: CanvasProps = {
    width: inchToPixel(canvasWidthInch),
    height: inchToPixel(canvasHeightInch),
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
export const uploadFile = (payload: ImageProps): Actions => ({
    type: UPLOAD_FILE,
    payload,
})
export const setErrorMessage = (payload: string): Actions => {
    return {
        type: ERROR_MESSAGE,
        payload,
    }
}

export const canvasReducer = (
    state: CanvasProps = initialState,
    action: Actions = { type: DEFAULT }
): CanvasProps => {
    const {
        width: canvasWidth,
        height: canvasHeight,
        image: { width, height, scale, ratio, x, y },
    } = state

    switch (action.type) {
        case MOVE_RIGHT: {
            const newX = x - 0.05 * width
            const scaledImageWidth = width * scale * ratio
            if (scaledImageWidth - canvasWidth + newX >= 0) {
                return {
                    ...state,
                    image: { ...state.image, x: newX },
                }
            }
            return {
                ...state,
                image: { ...state.image, x: canvasWidth - scaledImageWidth },
            }
        }

        case MOVE_LEFT: {
            const newX = x + 0.05 * width
            if (newX <= 0) {
                return {
                    ...state,
                    image: { ...state.image, x: newX },
                }
            }
            return {
                ...state,
                image: { ...state.image, x: 0 },
            }
        }

        case MOVE_DOWN: {
            const newY = y - 0.05 * height
            const scaledImageHeight = height * scale * ratio
            if (scaledImageHeight - canvasHeight + newY >= 0) {
                return {
                    ...state,
                    image: { ...state.image, y: newY },
                }
            }
            return {
                ...state,
                image: { ...state.image, y: canvasHeight - scaledImageHeight },
            }
        }

        case MOVE_UP: {
            const newY = y + 0.05 * height
            if (newY <= 0) {
                return {
                    ...state,
                    image: { ...state.image, y: newY },
                }
            }
            return {
                ...state,
                image: { ...state.image, y: 0 },
            }
        }

        case SCALE_UP: {
            const newScale = parseFloat((scale + 0.1).toFixed(1))
            return {
                ...state,
                image: { ...state.image, scale: newScale },
            }
        }

        case SCALE_DOWN: {
            const newScale = parseFloat((scale - 0.1).toFixed(1))
            const scaledImageWidth = width * newScale * ratio
            const scaledImageHeight = height * newScale * ratio
            if (
                scaledImageWidth >= canvasWidth &&
                scaledImageHeight >= canvasHeight
            ) {
                return {
                    ...state,
                    image: { ...state.image, scale: newScale, x: 0, y: 0 },
                }
            }
            return state
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
        case DEFAULT:
        default:
            return state
    }
}
