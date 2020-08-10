import { all, fork } from 'redux-saga/effects'
import {
  watchDefaultWatcher
} from './watchers'

function* defaultSaga() {
  yield all([
    fork(watchDefaultWatcher)
  ])
}

export default defaultSaga