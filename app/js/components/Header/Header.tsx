import React, { useCallback } from 'react'
import useFileUpload from '../../hooks/useFileUpload'
import FileUploadButton from '../General/FileUploadButton'
import './header.scss'

function Header(): JSX.Element {
    const { upload } = useFileUpload()

    const handleFileSelect = useCallback(
        (uploadedFile: File): void => {
            upload(uploadedFile)
        },
        [upload]
    )

    return (
        <header className="header" data-testid="header-component">
            <div className="header__logo" data-testid="logo">
                Photo Resizer
            </div>
            <FileUploadButton onFileSelect={handleFileSelect}>
                Upload Image/JSON
            </FileUploadButton>
        </header>
    )
}

export default Header
