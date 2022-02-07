import { CalculateRatioProps } from './calculateRatio.interface'

export default ({
    canvasWidth,
    canvasHeight,
    imageWidth,
    imageHeight,
}: CalculateRatioProps): number => {
    const hRatio = canvasWidth / imageWidth
    const vRatio = canvasHeight / imageHeight
    return Math.max(hRatio, vRatio)
}
