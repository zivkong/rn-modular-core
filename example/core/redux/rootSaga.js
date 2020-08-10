import { all, fork } from 'redux-saga/effects'

import watchDefaultWorker from '../default/saga'

function* rootSaga() {
  yield all([
    fork(watchDefaultWorker)
  ])
}

export default rootSaga