import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../../store/AppContext'
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
    const [imageObj, setImageObj] = useState<HTMLImageElement | null>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        const canvas = canvasRef.current
        if (imageObj && canvas) {
            drawImageToCanvas({
                canvas,
                imageObj,
                x,
                y,
                width,
                height,
                ratio,
                scale,
            })
        }
    }, [imageObj, x, y, scale, ratio, width, height])

    useEffect(() => {
        if (src) {
            const imageObject = new Image()
            imageObject.onload = () => {
                setImageObj(imageObject)
            }
            imageObject.src = src
        }
    }, [src])

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
