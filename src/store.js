import {applyMiddleware, createStore, combineReducers} from 'redux'
import {thinkfulDashReducer} from './reducers'
import thunk from 'redux-thunk'

const store = (
  createStore(combineReducers({
    thinkfulDash: thinkfulDashReducer
  }),
  applyMiddleware(thunk))
)

export default store
