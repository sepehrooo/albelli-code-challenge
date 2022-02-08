import { render, screen } from '@testing-library/react'
import React from 'react'
import Canvas from '.'

describe('Canvas', () => {
    test('renders without error', () => {
        render(<Canvas />)
        expect(screen.getByTestId('canvas')).toBeInTheDocument()
    })
})
