import { all, fork } from 'redux-saga/effects'

import watchDefaultWorker from '../example/saga'

function* rootSaga() {
  yield all([
    fork(watchDefaultWorker)
  ])
}

export default rootSaga