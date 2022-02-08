import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Button from '.'

describe('Button', () => {
    test("render's without error", () => {
        render(<Button>Test Button</Button>)
        expect(screen.getByText('Test Button')).toBeInTheDocument()
    })
    test('passing onclick and clicking on button', async () => {
        const handleClick = jest.fn()
        render(<Button onClick={handleClick}>Test Button</Button>)

        fireEvent.click(screen.getByText('Test Button'))
        expect(handleClick).toBeCalledTimes(1)
    })
})
