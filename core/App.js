import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { appInit, appEffect, appEffectCleanup } from './config/init'
import { store, persistor } from './config/redux'

import Navigation from './routes'

appInit()

const App = () => {
  useEffect(() => {
    appEffect()
    return () => appEffectCleanup()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider >
  )
}

export default App
