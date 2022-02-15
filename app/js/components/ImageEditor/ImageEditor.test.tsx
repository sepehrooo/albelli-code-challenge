/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { AppContext } from '../../store/AppContext'
import ImageEditor from '.'

describe('Image Editor', () => {
    describe('When an image is not loaded inside image editor', () => {
        beforeEach(() => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: null,
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ratio: 1,
                },
                message: '',
            }
            const dispatch = jest.fn()
            render(
                <AppContext.Provider value={{ state, dispatch }}>
                    <ImageEditor />
                </AppContext.Provider>
            )
        })
        test('image editor component should load with no errors', () => {
            expect(
                screen.queryByTestId('image-editor-component')
            ).toBeInTheDocument()
        })
        test('move up button should not show', () => {
            expect(
                screen.queryByTestId('move-up-button')
            ).not.toBeInTheDocument()
        })
        test('move down button should not show', () => {
            expect(
                screen.queryByTestId('move-down-button')
            ).not.toBeInTheDocument()
        })
        test('move left button should not show', () => {
            expect(
                screen.queryByTestId('move-left-button')
            ).not.toBeInTheDocument()
        })
        test('move right button should not show', () => {
            expect(
                screen.queryByTestId('move-right-button')
            ).not.toBeInTheDocument()
        })
        test('zoom in button should not show', () => {
            expect(
                screen.queryByTestId('zoom-in-button')
            ).not.toBeInTheDocument()
        })
        test('zoom out button should not show', () => {
            expect(
                screen.queryByTestId('zoom-out-button')
            ).not.toBeInTheDocument()
        })
        test('submit button should not show', () => {
            expect(
                screen.queryByTestId('submit-button')
            ).not.toBeInTheDocument()
        })
        test('canvas element should show', () => {
            expect(screen.queryByTestId('canvas')).not.toBeInTheDocument()
        })
    })
    describe('When an image is loaded inside image editor', () => {
        beforeEach(() => {
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 7000,
                    height: 4000,
                    x: 0,
                    y: 0,
                    scale: 1.2,
                    ratio: 0.75,
                },
                message: '',
            }
            const dispatch = jest.fn()

            render(
                <AppContext.Provider value={{ state, dispatch }}>
                    <ImageEditor />
                </AppContext.Provider>
            )
        })
        test('image editor component should load with no errors', () => {
            expect(
                screen.queryByTestId('image-editor-component')
            ).toBeInTheDocument()
        })
        test('move up button should show', () => {
            expect(screen.queryByTestId('move-up-button')).toBeInTheDocument()
        })
        test('move down button should show', () => {
            expect(screen.queryByTestId('move-down-button')).toBeInTheDocument()
        })
        test('move left button should show', () => {
            expect(screen.queryByTestId('move-left-button')).toBeInTheDocument()
        })
        test('move right button should show', () => {
            expect(
                screen.queryByTestId('move-right-button')
            ).toBeInTheDocument()
        })
        test('zoom in button should show', () => {
            expect(screen.queryByTestId('zoom-in-button')).toBeInTheDocument()
        })
        test('zoom out button should show', () => {
            expect(screen.queryByTestId('zoom-out-button')).toBeInTheDocument()
        })
        test('submit button should show', () => {
            expect(screen.queryByTestId('submit-button')).toBeInTheDocument()
        })
        test('canvas element should show', () => {
            expect(screen.queryByTestId('canvas')).toBeInTheDocument()
        })
    })
    describe(`When an image is loaded inside image 
        editor and we have errors`, () => {
        let error: string
        beforeEach(() => {
            error = 'We have errors!'
            const state = {
                width: 4500,
                height: 3000,
                image: {
                    src: 'image',
                    width: 7000,
                    height: 4000,
                    x: 0,
                    y: 0,
                    scale: 1.2,
                    ratio: 0.75,
                },
                message: error,
            }
            const dispatch = jest.fn()
            render(
                <AppContext.Provider value={{ state, dispatch }}>
                    <ImageEditor />
                </AppContext.Provider>
            )
        })
        test('image editor component should load with no errors', () => {
            expect(
                screen.queryByTestId('image-editor-component')
            ).toBeInTheDocument()
        })
        test('move up button should show', () => {
            expect(screen.queryByTestId('move-up-button')).toBeInTheDocument()
        })
        test('move down button should show', () => {
            expect(screen.queryByTestId('move-down-button')).toBeInTheDocument()
        })
        test('move left button should show', () => {
            expect(screen.queryByTestId('move-left-button')).toBeInTheDocument()
        })
        test('move right button should show', () => {
            expect(
                screen.queryByTestId('move-right-button')
            ).toBeInTheDocument()
        })
        test('zoom in button should show', () => {
            expect(screen.queryByTestId('zoom-in-button')).toBeInTheDocument()
        })
        test('zoom out button should show', () => {
            expect(screen.queryByTestId('zoom-out-button')).toBeInTheDocument()
        })
        test('submit button should show', () => {
            expect(screen.queryByTestId('submit-button')).toBeInTheDocument()
        })
        test('canvas element should show', () => {
            expect(screen.queryByTestId('canvas')).toBeInTheDocument()
        })
        test('we should show error message', () => {
            expect(screen.queryByTestId('error-msg')).toBeInTheDocument()
            expect(screen.queryByTestId('error-msg')).toHaveTextContent(error)
        })
    })
})
