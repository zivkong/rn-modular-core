import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { coreInit, coreCleanup } from './config/init'
import { store, persistor } from './config/redux'

import Navigation from './routes'

const App = () => {
  useEffect(() => {
    coreInit()
    return () => coreCleanup()
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
