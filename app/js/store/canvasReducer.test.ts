import {
    canvasReducer,
    CanvasState,
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
    describe('MOVE_RIGHT', () => {
        test("with a state mock that can't move right", () => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 2800,
                    height: 2800,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: 1.6071428571428572,
                },
                message: '',
            }
            const newState = canvasReducer(state, moveRight())
            expect(newState.image).toStrictEqual(state.image)
            expect(newState.message.length).not.toEqual(0)
        })
        test('with a state mock that can move right', () => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 7000,
                    height: 4000,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: 0.75,
                },
                message: '',
            }
            const newState = canvasReducer(state, moveRight())
            expect(newState.image.x).toEqual(-20)

            const { x, ...imageWithoutX } = state.image
            const { x: newX, ...newImageWithoutX } = newState.image
            expect(newImageWithoutX).toStrictEqual(imageWithoutX)
            expect(newState.message.length).toEqual(0)
        })
    })
    describe('MOVE_LEFT', () => {
        test("with a state mock that can't move left", () => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 2800,
                    height: 2800,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: 1.6071428571428572,
                },
                message: '',
            }
            const newState = canvasReducer(state, moveLeft())
            expect(newState.image).toStrictEqual(state.image)
            expect(newState.message.length).not.toEqual(0)
        })
        test('with a state mock that can move left', () => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 7000,
                    height: 4000,
                    x: -40,
                    y: 0,
                    scale: 1,
                    ratio: 0.75,
                },
                message: '',
            }
            const newState = canvasReducer(state, moveLeft())
            expect(newState.image.x).toEqual(-20)

            const { x, ...imageWithoutX } = state.image
            const { x: newX, ...newImageWithoutX } = newState.image
            expect(newImageWithoutX).toStrictEqual(imageWithoutX)
            expect(newState.message.length).toEqual(0)
        })
    })
    describe('MOVE_UP', () => {
        test("with a state mock that can't move up", () => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 7000,
                    height: 4000,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: 0.75,
                },
                message: '',
            }
            const newState = canvasReducer(state, moveUp())
            expect(newState.image).toStrictEqual(state.image)
            expect(newState.message.length).not.toEqual(0)
        })
        test('with a state mock that can move up', () => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 4000,
                    height: 7000,
                    x: 0,
                    y: -40,
                    scale: 1,
                    ratio: 0.75,
                },
                message: '',
            }
            const newState = canvasReducer(state, moveUp())
            expect(newState.image.y).toEqual(-20)

            const { y, ...imageWithoutY } = state.image
            const { y: newY, ...newImageWithoutY } = newState.image
            expect(newImageWithoutY).toStrictEqual(imageWithoutY)
            expect(newState.message.length).toEqual(0)
        })
    })
    describe('MOVE_DOWN', () => {
        test("with a state mock that can't move down", () => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 7000,
                    height: 4000,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: 0.75,
                },
                message: '',
            }
            const newState = canvasReducer(state, moveDown())
            expect(newState.image).toStrictEqual(state.image)
            expect(newState.message.length).not.toEqual(0)
        })
        test('with a state mock that can move down', () => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 4000,
                    height: 7000,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: 0.75,
                },
                message: '',
            }
            const newState = canvasReducer(state, moveDown())
            expect(newState.image.y).toEqual(-20)

            const { y, ...imageWithoutY } = state.image
            const { y: newY, ...newImageWithoutY } = newState.image
            expect(newImageWithoutY).toStrictEqual(imageWithoutY)
            expect(newState.message.length).toEqual(0)
        })
    })
    describe('SCALE_UP', () => {
        test('scale up', () => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 7000,
                    height: 4000,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: 0.75,
                },
                message: '',
            }
            const newState = canvasReducer(state, scaleUp())
            expect(newState.image.scale).toBe(1.1)

            const { scale, ...imageWithoutScale } = state.image
            const { scale: newScale, ...newImageWithoutScale } = newState.image
            expect(newImageWithoutScale).toStrictEqual(imageWithoutScale)
            expect(newState.message.length).toEqual(0)
        })
    })
    describe('SCALE_DOWN', () => {
        test("with a state mock that can't scale down", () => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 7000,
                    height: 4000,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: 0.75,
                },
                message: '',
            }
            const newState = canvasReducer(state, scaleDown())
            expect(newState.image).toStrictEqual(state.image)
            expect(newState.message.length).not.toEqual(0)
        })
        test('with a state mock that can scale down', () => {
            const state = {
                width: 4500,
                height: 3000,
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
            const newState = canvasReducer(state, scaleDown())
            expect(newState.image.scale).toEqual(1.1)

            const { scale, ...imageWithoutScale } = state.image
            const { scale: newScale, ...newImageWithoutScale } = newState.image
            expect(newImageWithoutScale).toStrictEqual(imageWithoutScale)
            expect(newState.message.length).toEqual(0)
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
                width: 4500,
                height: 3000,
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
