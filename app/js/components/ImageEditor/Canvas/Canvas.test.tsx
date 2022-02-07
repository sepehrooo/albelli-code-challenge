import { render, screen } from '@testing-library/react'
import React from 'react'
import AppContext from '../../../store/AppContext'
import Canvas from '.'
import { initialState } from '../../../store/canvasReducer'

describe('Canvas', () => {
    test('with a loaded image in state', () => {
        const dispatch = jest.fn()
        const state = {
            width: 4500,
            height: 3000,
            image: {
                src: 'IMG BASE 64 CODE',
                width: 4000,
                height: 7000,
                x: 0,
                y: 0,
                scale: 1,
                ratio: 1.125,
            },
            message: '',
        }

        render(
            <AppContext.Provider value={{ state, dispatch }}>
                <Canvas />
            </AppContext.Provider>
        )
        expect(screen.getByTestId('canvas')).toBeInTheDocument()
    })
    test('without a loaded image in state', () => {
        const dispatch = jest.fn()
        render(
            <AppContext.Provider value={{ state: initialState, dispatch }}>
                <Canvas />
            </AppContext.Provider>
        )
        expect(screen.getByTestId('canvas')).toBeInTheDocument()
    })
})
