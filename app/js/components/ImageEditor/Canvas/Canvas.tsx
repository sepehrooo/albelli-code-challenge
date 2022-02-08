import React, { useContext, useEffect, useRef } from 'react'
import AppContext from '../../../store/AppContext'
import drawImageToCanvas from '../../../utils/drawImageToCanvas'
import './canvas.scss'

function Canvas(): JSX.Element {
    const {
        state: {
            width: canvasWidth,
            height: canvasHeight,
            image: { src, width, height, x, y, scale, ratio },
        },
    } = useContext(AppContext)
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

    return (
        <canvas
            data-testid="canvas"
            className="canvas"
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
        />
    )
}

export default Canvas
