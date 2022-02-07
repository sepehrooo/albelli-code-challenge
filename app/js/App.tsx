import React, { ReactElement, useMemo, useReducer } from 'react'
import { hot } from 'react-hot-loader'
import Header from './components/Header/Header'
import ImageEditor from './components/ImageEditor/ImageEditor'
import '../styles/app.scss'
import { canvasReducer, initialState } from './store/canvasReducer'
import AppContext from './store/AppContext'

function App(): ReactElement {
    const [state, dispatch] = useReducer(canvasReducer, initialState)

    const contextValue = useMemo(() => {
        return { state, dispatch }
    }, [state, dispatch])

    return (
        <AppContext.Provider value={contextValue}>
            <>
                <Header />
                <ImageEditor />
            </>
        </AppContext.Provider>
    )
}

export default hot(module)(App)
