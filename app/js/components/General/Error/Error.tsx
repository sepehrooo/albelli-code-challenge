import React from 'react'
import Row from '../Row'
import { ErrorProps } from './Error.interface'
import './Error.scss'

function Error({ children = 'Error', ...props }: ErrorProps): JSX.Element {
    return (
        <Row className="error row" {...props}>
            {children}
        </Row>
    )
}

export default Error
