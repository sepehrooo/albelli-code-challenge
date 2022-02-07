import { render, screen } from '@testing-library/react'
import React from 'react'
import Error from '.'

describe('Error', () => {
    test("render's without error", () => {
        render(<Error>Test Error</Error>)
        expect(screen.getByText('Test Error')).toBeInTheDocument()
    })
})
