import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('App', () => {
    test('boom', async () => {
        const file = new File(['(⌐□_□)'], 'chucknorris.png', {
            type: 'image/png',
        })
        render(<App />)
        const fileUploader = screen.getByTestId('file-upload-input')
        await waitFor(() => {
            fireEvent.change(fileUploader, { target: { files: [file] } })
        })
    })
})
