import React, { useContext, useEffect, useRef } from 'react'
import {
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    scaleDown,
    scaleUp,
} from '../../store/canvasReducer'
import { Store } from '../../store/Store'
import pixelToInch from '../../utils/pixelToInch'
import Canvas from './Canvas'
import './image-editor.scss'

function ImageEditor(): JSX.Element {
    const {
        state: {
            width: canvasWidth,
            height: canvasHeight,
            image: { src, width, height, x, y, scale, ratio },
            message,
        },
        dispatch,
    } = useContext(Store)

    const submitHandler = (): void => {
        const data = {
            canvas: {
                width: pixelToInch(canvasWidth),
                height: pixelToInch(canvasHeight),
                photo: {
                    src,
                    width: pixelToInch(width),
                    height: pixelToInch(height),
                    x: pixelToInch(x),
                    y: pixelToInch(y),
                    scale: parseFloat(scale.toFixed(1)),
                    ratio,
                },
            },
        }
        const json = JSON.stringify(data)
        const blob = new Blob([json], { type: 'application/json' })
        const href = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = href
        link.download = `albelli-${(+new Date()).toString(36)}.json`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section data-testid="image-editor-component" className="image-editor">
            {src && (
                <div className="row">
                    <button onClick={() => dispatch(moveUp())} type="button">
                        Move Up
                    </button>
                </div>
            )}

            <div className="row">
                {src && (
                    <button onClick={() => dispatch(moveLeft())} type="button">
                        Move Left
                    </button>
                )}

                <Canvas />
                {src && (
                    <button onClick={() => dispatch(moveRight())} type="button">
                        Move Right
                    </button>
                )}
            </div>
            {src && (
                <>
                    <div className="row">
                        <button
                            onClick={() => dispatch(moveDown())}
                            type="button"
                        >
                            Move Down
                        </button>
                    </div>
                    <div className="row">
                        <button
                            onClick={() => dispatch(scaleUp())}
                            type="button"
                        >
                            Zoom In
                        </button>
                        <button
                            onClick={() => dispatch(scaleDown())}
                            type="button"
                        >
                            Zoom Out
                        </button>
                    </div>
                </>
            )}
            {message && <div className="row error">Warning: {message}</div>}
            {src && (
                <div className="row">
                    <button
                        type="button"
                        onClick={submitHandler}
                        className="submit-button"
                    >
                        Submit
                    </button>
                </div>
            )}
        </section>
    )
}

export default ImageEditor
