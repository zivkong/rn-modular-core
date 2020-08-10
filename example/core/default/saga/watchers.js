import { takeLatest, call } from 'redux-saga/effects'

import { defaultWorker } from './workers'

export function* watchDefaultWatcher() {
  yield takeLatest('DEFAULT_WORKER', defaultWorker)
}