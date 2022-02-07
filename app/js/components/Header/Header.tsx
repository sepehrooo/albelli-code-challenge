import React, { useEffect, useState } from 'react'
import useFileUpload from '../../hooks/useFileUpload'
import FileUploadButton from '../General/FileUploadButton'
import './header.scss'

function Header(): JSX.Element {
    const [file, setFile] = useState<File | null>(null)
    const { upload } = useFileUpload()

    useEffect(() => {
        if (file) {
            upload(file)
        }
    }, [file, upload])

    const handleFileSelect = (uploadedFile: File): void => {
        setFile(uploadedFile)
    }

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
