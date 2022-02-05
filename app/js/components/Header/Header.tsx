import React, { useEffect, useState } from 'react'
import useFileUpload from '../../hooks/useFileUpload'
import FileUploadButton from '../General/FileUploadButton'
import './header.scss'

function Header(): JSX.Element {
    const [file, setFile] = useState<File | null>(null)
    // upload logic is inside the custom hook
    const { upload } = useFileUpload()

    useEffect(() => {
        if (file) {
            upload(file)
        }
    }, [file, upload])

    const handleFileUpload = (uploadedFile: File): void => {
        setFile(uploadedFile)
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
