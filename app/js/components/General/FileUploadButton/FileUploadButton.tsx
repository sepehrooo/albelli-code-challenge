import React, { useRef } from 'react'
import Button from '../Button'
import { FileUploadButtonProps } from './FileUploadButton.interface'
import './FileUploadButton.scss'

function FileUploadButton({
    children,
    onFileSelect,
}: FileUploadButtonProps): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        if (event.target.files) {
            const file = event.target.files[0]
            onFileSelect(file)
        }
    }
    return (
        <div className="file-upload">
            <Button
                className="btn btn--upload"
                onClick={() => inputRef.current?.click()}
                type="button"
                data-testid="file-upload-button"
            >
                {children}
            </Button>
            <input
                onChange={handleFileChange}
                ref={inputRef}
                type="file"
                data-testid="file-upload-input"
                className="hide"
            />
        </div>
    )
}

export default FileUploadButton
