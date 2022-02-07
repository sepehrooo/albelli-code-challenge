import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import FileUploadButton from '.'

describe('File upload button', () => {
    let handleFileUpload: jest.Mock
    let file: File
    beforeEach(() => {
        file = new File(['(⌐□_□)'], 'chucknorris.png', {
            type: 'image/png',
        })
        handleFileUpload = jest.fn((x: File) => x.name)
    })
    test(`passing a children to component will 
        render a button with that specific text/element`, () => {
        render(
            <FileUploadButton onFileSelect={handleFileUpload}>
                Upload This
            </FileUploadButton>
        )
        expect(screen.getByTestId('file-upload-button')).toHaveTextContent(
            'Upload This'
        )
    })
    test("input element renders with 'hide' className so it's hidden", () => {
        render(
            <FileUploadButton onFileSelect={handleFileUpload}>
                Upload
            </FileUploadButton>
        )
        expect(screen.getByTestId('file-upload-input')).toHaveClass('hide')
    })
    test(`uploading a file will trigger
         handleFileUpload with the file`, async () => {
        render(
            <FileUploadButton onFileSelect={handleFileUpload}>
                Upload
            </FileUploadButton>
        )
        await waitFor(() =>
            fireEvent.change(screen.getByTestId('file-upload-input'), {
                target: { files: [file] },
            })
        )
        expect(handleFileUpload).toBeCalledWith(file)
    })
})
