import React, { ReactElement } from 'react'
import { hot } from 'react-hot-loader'
import Header from './components/Header/Header'
import ImageEditor from './components/ImageEditor/ImageEditor'
import '../styles/app.scss'
import { AppContextProvider } from './store/AppContext'

function App(): ReactElement {
    return (
        <AppContextProvider>
            <>
                <Header />
                <ImageEditor />
            </>
        </AppContextProvider>
    )
}

export default hot(module)(App)
