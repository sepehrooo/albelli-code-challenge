import React, { useRef } from 'react'
import './FileUploadButton.scss'

interface Props {
    buttonText?: string
    handleFileUpload: (file: File) => void
}

function FileUploadButton({
    buttonText,
    handleFileUpload,
}: Props): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleButtonClick = (): void => {
        inputRef.current?.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files) {
            const file = e.target.files[0]
            handleFileUpload(file)
        }
    }
    return (
        <>
            <button
                className="upload-button"
                onClick={handleButtonClick}
                type="button"
                data-testid="file-upload-button"
            >
                {buttonText}
            </button>
            <input
                onChange={handleFileChange}
                ref={inputRef}
                type="file"
                data-testid="file-upload-input"
                className="hide"
            />
        </>
    )
}

FileUploadButton.defaultProps = {
    buttonText: 'Upload File',
}

export default FileUploadButton
