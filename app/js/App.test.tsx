import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('App', () => {
    test('uploading an image will show the action buttons', async () => {
        const readImage = jest.requireActual('./utils/readImage')
        jest.spyOn(readImage, 'default').mockReturnValue(
            Promise.resolve({
                src: 'image',
                x: 0,
                y: 0,
                width: 4500,
                height: 3000,
                scale: 1,
                ratio: 1,
            })
        )
        const file = new File(['(⌐□_□)'], 'test-image.png', {
            type: 'image/png',
        })
        render(<App />)
        const fileUploader = screen.getByTestId('file-upload-input')
        await waitFor(() => {
            fireEvent.change(fileUploader, { target: { files: [file] } })
        })

        expect(await screen.findByTestId('move-up-button')).toBeInTheDocument()
        expect(
            await screen.findByTestId('move-left-button')
        ).toBeInTheDocument()
        expect(
            await screen.findByTestId('move-right-button')
        ).toBeInTheDocument()
        expect(
            await screen.findByTestId('move-down-button')
        ).toBeInTheDocument()
        expect(await screen.findByTestId('zoom-in-button')).toBeInTheDocument()
        expect(await screen.findByTestId('zoom-out-button')).toBeInTheDocument()
        expect(await screen.findByTestId('submit-button')).toBeInTheDocument()
    })
    test('uploading a JSON file will show all the action buttons', async () => {
        const file = new File(
            [
                JSON.stringify({
                    canvas: {
                        width: 15,
                        height: 10,
                        photo: {
                            src: 'imageFile',
                            width: 7.693,
                            height: 7.693,
                            x: 0,
                            y: 0,
                            scale: 1.1,
                            ratio: 1.949740034662045,
                        },
                    },
                }),
            ],
            'test.json',
            { type: 'application/json' }
        )

        render(<App />)
        const fileUploader = screen.getByTestId('file-upload-input')
        await waitFor(() => {
            fireEvent.change(fileUploader, { target: { files: [file] } })
        })
        expect(await screen.findByTestId('move-up-button')).toBeInTheDocument()
        expect(
            await screen.findByTestId('move-left-button')
        ).toBeInTheDocument()
        expect(
            await screen.findByTestId('move-right-button')
        ).toBeInTheDocument()
        expect(
            await screen.findByTestId('move-down-button')
        ).toBeInTheDocument()
        expect(await screen.findByTestId('zoom-in-button')).toBeInTheDocument()
        expect(await screen.findByTestId('zoom-out-button')).toBeInTheDocument()
        expect(await screen.findByTestId('submit-button')).toBeInTheDocument()
    })
})
