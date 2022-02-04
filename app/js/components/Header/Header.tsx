import React, { useContext } from 'react'
import { setErrorMessage, uploadFile } from '../../store/canvasReducer'
import { Store } from '../../store/Store'
import calculateRatio from '../../utils/calculateRatio'
import inchToPixel from '../../utils/inchToPixel'
import FileUploadButton from '../General/FileUploadButton'
import './header.scss'

function Header(): JSX.Element {
    const { dispatch } = useContext(Store)
    const handleFileUpload = (file: File): void => {
        const reader = new FileReader()
        switch (file.type) {
            case 'image/jpeg':
            case 'image/png':
            case 'image/gif':
                reader.onload = () => {
                    // create HTMLImageElement holding image data
                    const img = new Image()
                    if (reader.result) {
                        img.src = reader.result as string
                        img.onload = () => {
                            // grab some data from the image
                            const width = img.naturalWidth
                            const height = img.naturalHeight
                            /*
                            Calculating ratio so the 
                            image always fills the canvas 

                            App Requirement: 15" x 10" canvas
                            Since industry standard print quality
                            is 300PPI (Pixels Per Inch), The width of the 
                            canvas would be 15" * 300PPI = 4500 Pixels 
                            And the height of the canvas would be
                            10 * 300 = 3000 Pixels
                            */
                            const ratio = calculateRatio({
                                canvasWidth: 4500,
                                canvasHeight: 3000,
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
                }
                reader.readAsDataURL(file)
                break
            case 'application/json':
                reader.onload = () => {
                    if (reader.result) {
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
                        if (
                            canvasWidth &&
                            canvasHeight &&
                            src &&
                            width &&
                            height &&
                            typeof x === 'number' &&
                            typeof y === 'number' &&
                            ratio &&
                            scale
                        ) {
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
                        } else {
                            dispatch(
                                setErrorMessage('JSON file is not standard!')
                            )
                        }
                    }
                }
                reader.readAsText(file)
                break
            default:
                dispatch(
                    setErrorMessage(
                        `Unrecognized File! Either upload 
                        an image or a JSON file`
                    )
                )
        }
    }

    return (
        <header className="header" data-testid="header-component">
            <div className="logo" data-testid="logo">
                Photo Resizer
            </div>
            <FileUploadButton
                buttonText="Upload Image/JSON"
                handleFileUpload={handleFileUpload}
            />
        </header>
    )
}

export default Header
