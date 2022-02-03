import React from 'react'
import FileUploadButton from '../General/FileUploadButton'

function Header(): JSX.Element {
    return (
        <div data-testid="header-component">
            <div data-testid="logo">Photo Resizer</div>
            <FileUploadButton
                handleFileUpload={(file) => console.log(file.name)}
            />
        </div>
    )
}

export default Header
