import { ImageProps } from '../../interfaces/ImageProps.interface'
import inchToPixel from '../inchToPixel'

export default (file: File): Promise<ImageProps> => {
    return new Promise((resolve, reject) => {
        if (file.type !== 'application/json') {
            reject(new Error('File is not JSON!'))
        }
        const reader = new FileReader()
        reader.onerror = () => {
            reject(new Error('File is not readable!'))
        }
        reader.onload = () => {
            if (!reader.result) {
                reject(new Error('File is not readable!'))
            }
            const data = JSON.parse(reader.result as string)
            const {
                canvas: {
                    width: canvasWidth,
                    height: canvasHeight,
                    photo: { src, width, height, x, y, ratio, scale },
                },
            } = data
            // Check if the JSON file is in correct format
            if (
                !canvasWidth ||
                !canvasHeight ||
                !src ||
                !width ||
                !height ||
                typeof x !== 'number' ||
                typeof y !== 'number' ||
                !ratio ||
                !scale
            ) {
                reject(new Error('JSON file is not standard!'))
                return
            }
            resolve({
                src,
                x: inchToPixel(x),
                y: inchToPixel(y),
                width: inchToPixel(width),
                height: inchToPixel(height),
                scale,
                ratio,
            })
        }
        reader.readAsText(file)
    })
}
