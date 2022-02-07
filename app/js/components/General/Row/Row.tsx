import React from 'react'
import { RowProps } from './Row.interface'
import './Row.scss'

function Row({ className = 'row', children, ...props }: RowProps): JSX.Element {
    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}

export default Row
