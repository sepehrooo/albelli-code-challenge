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

    /* 
    We divide canvasWidth to 12 for styling and the height will adjust 
    automatically so it looks good in all devices. This is not the best
    approach but since in app requirements I was instructed
    not to spend too much time on styling I chose this approach
    */
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
