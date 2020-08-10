import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import FilesystemStorage from 'redux-persist-filesystem-storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../redux/rootReducer'
import rootSaga from '../redux/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, sagaMiddleware]

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middleware)),
)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }