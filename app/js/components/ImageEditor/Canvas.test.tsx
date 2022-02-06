import { render, screen } from '@testing-library/react'
import React from 'react'
import { Store } from '../../store/Store'
import state from './canvas.test.json'
import Canvas from './Canvas'
import { initialState } from '../../store/canvasReducer'

describe('Canvas', () => {
    test('with a loaded image in state', () => {
        const dispatch = jest.fn()
        render(
            <Store.Provider value={{ state, dispatch }}>
                <Canvas />
            </Store.Provider>
        )
        expect(screen.getByTestId('canvas')).toBeInTheDocument()
    })
    test('without a loaded image in state', () => {
        const dispatch = jest.fn()
        render(
            <Store.Provider value={{ state: initialState, dispatch }}>
                <Canvas />
            </Store.Provider>
        )
        expect(screen.getByTestId('canvas')).toBeInTheDocument()
    })
})
