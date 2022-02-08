import { CanvasProps } from '../../interfaces/CanvasProps.interface'
import pixelToInch from '../pixelToInch'

export default (data: CanvasProps): void => {
    const {
        width: canvasWidth,
        height: canvasHeight,
        image: { src, width, height, x, y, scale, ratio },
    } = data
    const cleanedData = {
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
    const json = JSON.stringify(cleanedData)
    const blob = new Blob([json], { type: 'application/json' })
    const href = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = href
    link.download = `albelli-${(+new Date()).toString(36)}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
