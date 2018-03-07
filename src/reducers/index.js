import * as actions from '../actions'

const initialState = {
  logInCredentials: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    logged: false
  },
  scheduled: false
}

export const thinkfulDashReducer = (state=initialState, action) => {
  if (action.type === actions.LOG_IN_CREDENTIALS) {
    return Object.assign({}, state, {logInCredentials: {
      fullName: action.fullName,
      email: action.email,
      phone: action.phone,
      location: action.location,
      logged: true}}
    )
  }
  else if (action.type === actions.SCHEDULED) {
    return Object.assign({}, state, {scheduled: true})
  }
    return state
}
