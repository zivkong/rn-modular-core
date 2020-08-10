import { takeLatest, call } from 'redux-saga/effects'

function* defaultWorker() {
  try {
    yield true
  } catch (error) {
    console.error('default Worker error', error)
  }
}

export function* watchDefaultWorker() {
  yield takeLatest('DEFAULT_WORKER', defaultWorker)
}