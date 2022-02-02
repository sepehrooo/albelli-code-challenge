import React, { ReactElement } from 'react'
import { hot } from 'react-hot-loader'

function App(): ReactElement {
    const [count, setCount] = React.useState<number>(0)

    const increment = (): void => {
        setCount((c) => c + 1)
    }

    const decrement = (): void => {
        setCount((c) => c - 1)
    }

    return (
        <div>
            <h2>
                Numbersss: <b>{count}</b>
            </h2>
            <br />
            <br />
            <button type="button" onClick={() => increment()}>
                Increment
            </button>{' '}
            <button type="button" onClick={() => decrement()}>
                Decrement
            </button>{' '}
        </div>
    )
}

export default hot(module)(App)
