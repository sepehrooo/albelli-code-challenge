import { render, screen } from '@testing-library/react'
import React from 'react'
import Row from '.'

describe('Error', () => {
    test("render's without error", () => {
        render(<Row>Test Row</Row>)
        expect(screen.getByText('Test Row')).toBeInTheDocument()
    })
})
