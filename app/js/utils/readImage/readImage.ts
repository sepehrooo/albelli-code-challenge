import { ImageProps } from '../../interfaces/ImageProps.interface'
import { canvasHeightInch, canvasWidthInch } from '../../variables'
import calculateRatio from '../calculateRatio'
import inchToPixel from '../inchToPixel'

export default (file: File): Promise<ImageProps> => {
    return new Promise((resolve, reject) => {
        const imageFileTypes = ['image/jpeg', 'image/png', 'image/gif']
        if (!imageFileTypes.includes(file.type)) {
            reject(new Error('File is not an image!'))
        }
        const reader = new FileReader()
        reader.onerror = () => {
            reject(new Error('File is not readable!'))
        }
        reader.onload = () => {
            const img = new Image()
            if (!reader.result) {
                reject(new Error('File is not readable!'))
            }
            img.onerror = () => reject(new Error("Image can't be loaded!"))
            img.onload = () => {
                const width = img.naturalWidth
                const height = img.naturalHeight
                /*
                Calculating ratio so the 
                image always fills the canvas 
                */
                const ratio = calculateRatio({
                    canvasWidth: inchToPixel(canvasWidthInch),
                    canvasHeight: inchToPixel(canvasHeightInch),
                    imageWidth: width,
                    imageHeight: height,
                })

                resolve({
                    src: img.src,
                    x: 0,
                    y: 0,
                    width,
                    height,
                    scale: 1,
                    ratio,
                })
            }
            img.src = reader.result as string
        }
        reader.readAsDataURL(file)
    })
}
