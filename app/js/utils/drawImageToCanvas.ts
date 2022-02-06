interface Props {
    canvas: HTMLCanvasElement
    src: string
    x: number
    y: number
    width: number
    height: number
    ratio: number
    scale: number
}
export default ({
    canvas,
    src,
    x,
    y,
    width,
    height,
    ratio,
    scale,
}: Props): void => {
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
