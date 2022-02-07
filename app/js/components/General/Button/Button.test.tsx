import { render, screen } from '@testing-library/react'
import React from 'react'
import Button from '.'

describe('Button', () => {
    test("render's without error", () => {
        render(<Button>Test Button</Button>)
        expect(screen.getByText('Test Button')).toBeInTheDocument()
    })
})
