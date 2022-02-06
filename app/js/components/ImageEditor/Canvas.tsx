import React, { useContext, useEffect, useRef } from 'react'
import { Store } from '../../store/Store'
import drawImageToCanvas from '../../utils/drawImageToCanvas'
import './canvas.scss'

function Canvas(): JSX.Element {
    const {
        state: {
            width: canvasWidth,
            height: canvasHeight,
            image: { src, width, height, x, y, scale, ratio },
        },
    } = useContext(Store)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        const canvas = canvasRef.current
        if (src && canvas) {
            drawImageToCanvas({
                canvas,
                src,
                x,
                y,
                width,
                height,
                ratio,
                scale,
            })
        }
    }, [src, x, y, scale, ratio, width, height])

    /* 
    App Requirement: 15" x 10" canvas
    Since industry standard print quality is 300PPI (Pixels Per Inch),
    The width of the canvas would be 15" * 300PPI = 4500 Pixels 
    And the height of the canvas would be 10 * 300 = 3000 Pixels
    But we will style the canvas to be shown smaller (375px * 250px)
    */
    return (
        <canvas
            data-testid="canvas"
            className="image-canvas"
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
        />
    )
}

export default Canvas
