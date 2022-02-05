import React, { useContext } from 'react'
import {
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    scaleDown,
    scaleUp,
} from '../../store/canvasReducer'
import { Store } from '../../store/Store'
import createJsonAndDownload from '../../utils/createJsonAndDownload'
import Canvas from './Canvas'
import './image-editor.scss'

function ImageEditor(): JSX.Element {
    const { state, dispatch } = useContext(Store)
    const {
        image: { src },
        message,
    } = state

    const submitHandler = (): void => {
        createJsonAndDownload(state)
    }

    return (
        <section data-testid="image-editor-component" className="image-editor">
            {message && <div className="row error">Warning: {message}</div>}
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
                    <div className="row">
                        <button
                            type="button"
                            onClick={submitHandler}
                            className="submit-button"
                        >
                            Submit
                        </button>
                    </div>
                </>
            )}
        </section>
    )
}

export default ImageEditor
