import React from 'react'
import FileUploadButton from '../General/FileUploadButton'

function Header(): JSX.Element {
    return (
        <header className="header" data-testid="header-component">
            <div data-testid="logo">Photo Resizer</div>
            <FileUploadButton
                buttonText="Upload Image"
                handleFileUpload={(file) => console.log(file.name)}
            />
            <FileUploadButton
                buttonText="Upload JSON"
                handleFileUpload={(file) => console.log(file)}
            />
        </header>
    )
}

export default Header
