import { DrawImageToCanvasProps } from './drawImageToCanvas.interface'

export default ({
    canvas,
    src,
    x,
    y,
    width,
    height,
    ratio,
    scale,
}: DrawImageToCanvasProps): void => {
    const canvasContext = canvas?.getContext('2d')
    const imageObj = new Image()
    imageObj.onload = () => {
        canvasContext?.clearRect(0, 0, canvas.width, canvas.height)
        canvasContext?.drawImage(
            imageObj,
            x,
            y,
            // scale is between 0 and 2 for zooming
            width * ratio * scale,
            height * ratio * scale
        )
    }
    imageObj.src = src
}
