import React, { useContext } from 'react'
import {
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    scaleDown,
    scaleUp,
} from '../../store/canvasReducer'
import { AppContext } from '../../store/AppContext'
import createJsonAndDownload from '../../utils/createJsonAndDownload'
import Button from '../General/Button'
import Row from '../General/Row'
import Error from '../General/Error'
import Canvas from './Canvas'
import './image-editor.scss'

function ImageEditor(): JSX.Element {
    const { state, dispatch } = useContext(AppContext)
    const {
        image: { src },
        message,
    } = state

    const submitHandler = (): void => {
        createJsonAndDownload(state)
    }

    return (
        <section data-testid="image-editor-component" className="image-editor">
            {src && (
                <>
                    <Row className="image-editor__row row">
                        <Button
                            data-testid="move-up-button"
                            onClick={() => dispatch(moveUp())}
                            className="btn"
                        >
                            Move Up &#8593;
                        </Button>
                    </Row>

                    <Row className="image-editor__row row">
                        <Button
                            data-testid="move-left-button"
                            onClick={() => dispatch(moveLeft())}
                            className="btn"
                        >
                            &#8592; Move Left
                        </Button>

                        <Canvas />
                        <Button
                            data-testid="move-right-button"
                            onClick={() => dispatch(moveRight())}
                            className="btn"
                        >
                            Move Right &#8594;
                        </Button>
                    </Row>

                    <Row className="image-editor__row row">
                        <Button
                            data-testid="move-down-button"
                            onClick={() => dispatch(moveDown())}
                            className="btn"
                        >
                            Move Down &#8595;
                        </Button>
                    </Row>
                    <Row className="image-editor__row row">
                        <Button
                            data-testid="zoom-in-button"
                            onClick={() => dispatch(scaleUp())}
                            className="btn"
                        >
                            Zoom In &#8853;
                        </Button>
                        <Button
                            data-testid="zoom-out-button"
                            onClick={() => dispatch(scaleDown())}
                            className="btn"
                        >
                            Zoom Out &#8854;
                        </Button>
                    </Row>
                    <Row className="image-editor__row row">
                        <Button
                            data-testid="submit-button"
                            type="button"
                            onClick={submitHandler}
                            className="btn btn--submit"
                        >
                            Submit
                        </Button>
                    </Row>
                </>
            )}
            {message && <Error data-testid="error-msg">Error: {message}</Error>}
        </section>
    )
}

export default ImageEditor
