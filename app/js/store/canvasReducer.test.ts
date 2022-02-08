import calculateRatio from '../utils/calculateRatio/calculateRatio'
import inchToPixel from '../utils/inchToPixel/inchToPixel'
import { canvasHeightInch, canvasWidthInch } from '../variables'
import {
    canvasReducer,
    initialState,
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    scaleDown,
    scaleUp,
    setErrorMessage,
    uploadFile,
} from './canvasReducer'

test('calling reducer with undefined state and action', () => {
    const state = canvasReducer(undefined, undefined)
    expect(state).toStrictEqual(initialState)
})
describe('different actions will return the desired state', () => {
    const canvasWidth = inchToPixel(canvasWidthInch)
    const canvasHeight = inchToPixel(canvasHeightInch)
    describe('MOVE_RIGHT', () => {
        test("with a state mock that can't move right", () => {
            const imageWidth = canvasWidth - 0.3 * canvasWidth
            const imageHeight = canvasWidth - 0.3 * canvasWidth
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    /*
                    square image with width/height less than canvas width 
                    */
                    width: imageWidth,
                    height: imageHeight,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: calculateRatio({
                        canvasWidth,
                        canvasHeight,
                        imageWidth,
                        imageHeight,
                    }),
                },
                message: '',
            }
            const newState = canvasReducer(state, moveRight())
            expect(newState.image).toStrictEqual(state.image)
        })
        test('with a state mock that can move right', () => {
            const imageWidth = canvasWidth + 0.3 * canvasWidth
            const imageHeight = canvasWidth - 0.3 * canvasWidth
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    /*
                    image with width more than canvas width 
                    and height less than canvas height
                    */
                    width: imageWidth,
                    height: imageHeight,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: calculateRatio({
                        canvasWidth,
                        canvasHeight,
                        imageWidth,
                        imageHeight,
                    }),
                },
                message: '',
            }
            const newState = canvasReducer(state, moveRight())
            expect(newState.image.x).toEqual(-0.05 * state.image.width)

            const { x, ...imageWithoutX } = state.image
            const { x: newX, ...newImageWithoutX } = newState.image
            expect(newImageWithoutX).toStrictEqual(imageWithoutX)
        })
    })
    describe('MOVE_LEFT', () => {
        test("with a state mock that can't move left", () => {
            const imageWidth = canvasWidth - 0.3 * canvasWidth
            const imageHeight = canvasWidth - 0.3 * canvasWidth
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    /*
                    square image with width/height less than canvas width 
                    */
                    width: imageWidth,
                    height: imageHeight,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: calculateRatio({
                        canvasWidth,
                        canvasHeight,
                        imageWidth,
                        imageHeight,
                    }),
                },
                message: '',
            }
            const newState = canvasReducer(state, moveLeft())
            expect(newState.image).toStrictEqual(state.image)
        })
        test('with a state mock that can move left', () => {
            const imageWidth = canvasWidth + 0.3 * canvasWidth
            const imageHeight = canvasWidth - 0.3 * canvasWidth
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    /*
                    image with width more than canvas width 
                    and height less than canvas height
                    */
                    width: imageWidth,
                    height: imageHeight,
                    x: -0.5 * imageWidth,
                    y: 0,
                    scale: 1,
                    ratio: calculateRatio({
                        canvasWidth,
                        canvasHeight,
                        imageWidth,
                        imageHeight,
                    }),
                },
                message: '',
            }
            const newState = canvasReducer(state, moveLeft())
            expect(newState.image.x).toEqual(
                state.image.x + 0.05 * state.image.width
            )

            const { x, ...imageWithoutX } = state.image
            const { x: newX, ...newImageWithoutX } = newState.image
            expect(newImageWithoutX).toStrictEqual(imageWithoutX)
        })
    })
    describe('MOVE_UP', () => {
        test("with a state mock that can't move up", () => {
            const imageWidth = canvasWidth + 0.3 * canvasWidth
            const imageHeight = canvasWidth - 0.3 * canvasWidth
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    /*
                    image with width more than canvas width 
                    and height less than canvas height
                    */
                    width: imageWidth,
                    height: imageHeight,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: calculateRatio({
                        canvasWidth,
                        canvasHeight,
                        imageWidth,
                        imageHeight,
                    }),
                },
                message: '',
            }
            const newState = canvasReducer(state, moveUp())
            expect(newState.image).toStrictEqual(state.image)
        })
        test('with a state mock that can move up', () => {
            const imageWidth = canvasWidth - 0.3 * canvasWidth
            const imageHeight = canvasWidth + 0.3 * canvasWidth
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    /*
                    image with width less than canvas width 
                    and height more than canvas height
                    */
                    width: imageWidth,
                    height: imageHeight,
                    x: 0,
                    y: -0.5 * imageHeight,
                    scale: 1,
                    ratio: calculateRatio({
                        canvasWidth,
                        canvasHeight,
                        imageWidth,
                        imageHeight,
                    }),
                },
                message: '',
            }
            const newState = canvasReducer(state, moveUp())
            expect(newState.image.y).toEqual(
                state.image.y + 0.05 * state.image.height
            )

            const { y, ...imageWithoutY } = state.image
            const { y: newY, ...newImageWithoutY } = newState.image
            expect(newImageWithoutY).toStrictEqual(imageWithoutY)
        })
    })
    describe('MOVE_DOWN', () => {
        test("with a state mock that can't move down", () => {
            const imageWidth = canvasWidth + 0.3 * canvasWidth
            const imageHeight = canvasWidth - 0.3 * canvasWidth
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    /*
                    image with width more than canvas width 
                    and height less than canvas height
                    */
                    width: imageWidth,
                    height: imageHeight,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: calculateRatio({
                        canvasWidth,
                        canvasHeight,
                        imageWidth,
                        imageHeight,
                    }),
                },
                message: '',
            }
            const newState = canvasReducer(state, moveDown())
            expect(newState.image).toStrictEqual(state.image)
        })
        test('with a state mock that can move down', () => {
            const imageWidth = canvasWidth - 0.3 * canvasWidth
            const imageHeight = canvasWidth + 0.3 * canvasWidth
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    /*
                    image with width less than canvas width 
                    and height more than canvas height
                    */
                    width: imageWidth,
                    height: imageHeight,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: calculateRatio({
                        canvasWidth,
                        canvasHeight,
                        imageWidth,
                        imageHeight,
                    }),
                },
                message: '',
            }
            const newState = canvasReducer(state, moveDown())
            expect(newState.image.y).toEqual(-0.05 * state.image.height)

            const { y, ...imageWithoutY } = state.image
            const { y: newY, ...newImageWithoutY } = newState.image
            expect(newImageWithoutY).toStrictEqual(imageWithoutY)
        })
    })
    describe('SCALE_UP', () => {
        test('scale up', () => {
            const imageWidth = canvasWidth + 0.3 * canvasWidth
            const imageHeight = canvasWidth - 0.3 * canvasWidth
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    /*
                    image with width more than canvas width 
                    and height less than canvas height
                    */
                    width: imageWidth,
                    height: imageHeight,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: calculateRatio({
                        canvasWidth,
                        canvasHeight,
                        imageWidth,
                        imageHeight,
                    }),
                },
                message: '',
            }
            const newState = canvasReducer(state, scaleUp())
            expect(newState.image.scale).toBe(1.1)

            const { scale, ...imageWithoutScale } = state.image
            const { scale: newScale, ...newImageWithoutScale } = newState.image
            expect(newImageWithoutScale).toStrictEqual(imageWithoutScale)
        })
    })
    describe('SCALE_DOWN', () => {
        test("with a state mock that can't scale down", () => {
            const imageWidth = canvasWidth + 0.3 * canvasWidth
            const imageHeight = canvasWidth - 0.3 * canvasWidth
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    /*
                    image with width more than canvas width 
                    and height less than canvas height
                    */
                    width: imageWidth,
                    height: imageHeight,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: calculateRatio({
                        canvasWidth,
                        canvasHeight,
                        imageWidth,
                        imageHeight,
                    }),
                },
                message: '',
            }
            const newState = canvasReducer(state, scaleDown())
            expect(newState.image).toStrictEqual(state.image)
        })
        test('with a state mock that can scale down', () => {
            const imageWidth = canvasWidth + 0.3 * canvasWidth
            const imageHeight = canvasWidth - 0.3 * canvasWidth
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    /*
                    image with width more than canvas width 
                    and height less than canvas height
                    */
                    width: imageWidth,
                    height: imageHeight,
                    x: 0,
                    y: 0,
                    scale: 1.2,
                    ratio: calculateRatio({
                        canvasWidth,
                        canvasHeight,
                        imageWidth,
                        imageHeight,
                    }),
                },
                message: '',
            }
            const newState = canvasReducer(state, scaleDown())
            expect(newState.image.scale).toEqual(1.1)

            const { scale, ...imageWithoutScale } = state.image
            const { scale: newScale, ...newImageWithoutScale } = newState.image
            expect(newImageWithoutScale).toStrictEqual(imageWithoutScale)
        })
    })
    describe('UPLOAD_FILE', () => {
        test('file upload', () => {
            const image = {
                src: 'image',
                width: 7000,
                height: 4000,
                x: 0,
                y: 0,
                scale: 1,
                ratio: 0.75,
            }
            const newState = canvasReducer(undefined, uploadFile(image))

            const optimisticNewState = { ...initialState, image }

            expect(newState).toStrictEqual(optimisticNewState)
        })
    })
    describe('ERROR_MESSAGE', () => {
        test('set error message', () => {
            const state = {
                width: canvasWidth,
                height: canvasHeight,
                image: {
                    src: 'image',
                    width: 7000,
                    height: 4000,
                    x: 0,
                    y: 0,
                    scale: 1.2,
                    ratio: 0.75,
                },
                message: '',
            }
            const err = 'Test Error!'
            const newState = canvasReducer(state, setErrorMessage(err))

            const optimisticNewState = { ...state, message: err }

            expect(newState).toStrictEqual(optimisticNewState)
        })
    })
})
