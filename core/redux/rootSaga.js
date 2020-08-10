import { all, fork, takeLatest, put } from 'redux-saga/effects'

import defaultSaga from '../example/saga'

function* rootSaga() {
  yield all([
    fork(defaultSaga)
  ])
}

export default rootSaga