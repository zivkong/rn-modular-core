import { combineReducers } from 'redux'

import defaultReducers from '../default/redux' // Replace this with module reducer

const rootReducer = (state, action) => combineReducers({
  default: defaultReducers
})(state, action)

export default rootReducer