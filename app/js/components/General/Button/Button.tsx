import React from 'react'
import { Button } from './Button.interface'
import './Button.scss'

function Button({
    children,
    type = 'button',
    className = 'btn',
    ...props
}: Button & React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
    return (
        <button
            className={className}
            type={type === 'button' ? 'button' : 'submit'}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
