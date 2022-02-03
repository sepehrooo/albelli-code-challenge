import React, { ReactElement } from 'react'
import { hot } from 'react-hot-loader'
import Header from './components/Header/Header'
import ImageEditor from './components/ImageEditor/ImageEditor'
import { StoreProvider } from './store/Store'
import '../sass/app.scss'

function App(): ReactElement {
    return (
        <StoreProvider>
            <>
                <Header />
                <ImageEditor />
            </>
        </StoreProvider>
    )
}

export default hot(module)(App)
