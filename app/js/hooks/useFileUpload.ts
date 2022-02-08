import { useCallback, useContext } from 'react'
import { setErrorMessage, uploadFile } from '../store/canvasReducer'
import AppContext from '../store/AppContext'
import readImage from '../utils/readImage'
import readJson from '../utils/readJson'

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
            switch (file.type) {
                case 'image/jpeg':
                case 'image/png':
                case 'image/gif': {
                    readImage(file)
                        .then((imageData) => {
                            dispatch(uploadFile(imageData))
                        })
                        .catch((error) => {
                            dispatch(setErrorMessage(error.message))
                        })
                    break
                }
                case 'application/json': {
                    readJson(file)
                        .then((imageData) => {
                            dispatch(uploadFile(imageData))
                        })
                        .catch((error) => {
                            dispatch(setErrorMessage(error.message))
                        })
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
