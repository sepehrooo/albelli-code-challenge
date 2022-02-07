import { useCallback, useContext } from 'react'
import { setErrorMessage, uploadFile } from '../store/canvasReducer'
import AppContext from '../store/AppContext'
import calculateRatio from '../utils/calculateRatio/calculateRatio'
import inchToPixel from '../utils/inchToPixel/inchToPixel'
import {
    canvasHeightInch,
    canvasWidthInch,
    printPixelPerInchQuality,
} from '../utils/variables'

interface HookReturn {
    upload: (file: File) => void | null
}

const useFileUpload = (): HookReturn => {
    const { dispatch } = useContext(AppContext)

    const upload = useCallback(
        (file: File): void => {
            if (!file) {
                return
            }
            const reader = new FileReader()
            switch (file.type) {
                case 'image/jpeg':
                case 'image/png':
                case 'image/gif': {
                    reader.onload = () => {
                        // create HTMLImageElement holding image data
                        const img = new Image()
                        if (!reader.result) {
                            dispatch(setErrorMessage('File is not readable!'))
                            return
                        }
                        img.src = reader.result as string
                        img.onload = () => {
                            // grab width & height from image
                            const width = img.naturalWidth
                            const height = img.naturalHeight
                            /*
                            Calculating ratio so the 
                            image always fills the canvas 
                            */
                            const ratio = calculateRatio({
                                canvasWidth:
                                    canvasWidthInch * printPixelPerInchQuality,
                                canvasHeight:
                                    canvasHeightInch * printPixelPerInchQuality,
                                imageWidth: width,
                                imageHeight: height,
                            })
                            /* 
                            dispatching action to update global
                            state with the uploaded image
                            */
                            dispatch(
                                uploadFile({
                                    src: img.src,
                                    x: 0,
                                    y: 0,
                                    width,
                                    height,
                                    scale: 1,
                                    ratio,
                                })
                            )
                        }
                    }
                    reader.readAsDataURL(file)
                    break
                }
                case 'application/json': {
                    reader.onload = () => {
                        if (!reader.result) {
                            dispatch(setErrorMessage('File is not readable!'))
                            return
                        }
                        // Parse JSON data from uploaded json file
                        const data = JSON.parse(reader.result as string)
                        const {
                            canvas: {
                                width: canvasWidth,
                                height: canvasHeight,
                                photo: {
                                    src,
                                    width,
                                    height,
                                    x,
                                    y,
                                    ratio,
                                    scale,
                                },
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
                            dispatch(
                                setErrorMessage('JSON file is not standard!')
                            )
                            return
                        }
                        /*
                        dispatch action to update the state with JSON 
                        data. also convert Inch to Pixels based on the defined
                        PPI print quality set in app/js/utils/variables.ts
                        */
                        dispatch(
                            uploadFile({
                                src,
                                x: inchToPixel(x),
                                y: inchToPixel(y),
                                width: inchToPixel(width),
                                height: inchToPixel(height),
                                scale,
                                ratio,
                            })
                        )
                    }
                    reader.readAsText(file)
                    break
                }
                default:
                    dispatch(
                        setErrorMessage(
                            `Unrecognized File! Either upload 
                            an image or a JSON file`
                        )
                    )
            }
        },
        [dispatch]
    )
    return { upload }
}

export default useFileUpload
