import axios from 'axios'

export const LOG_IN_CREDENTIALS = 'LOG_IN_CREDENTIALS'
export const logInCredentials = (fullName, email, phone, location) => ({
    type: LOG_IN_CREDENTIALS,
    fullName,
    email,
    phone,
    location
})

export const loggedIn = (fullName, email, phone, location, channel) => dispatch => {
  const credentials = {fullName, email, phone, location}

  return axios.post('https://us-central1-thinkful-student-dash.cloudfunctions.net/sendgrid/login', {
      data: {
        credentials,
        url: 'trial',
        channel
      }
    })
    .then(function (response) {
      dispatch(logInCredentials(fullName, email, phone, location))
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const SCHEDULED = 'SCHEDULED'
export const scheduled = () => ({
    type: SCHEDULED
})

export const sendScheduled = (credentials, time, channel) => dispatch => {
  console.log('credentials', credentials);
  console.log('time', time);
  return axios.post('https://us-central1-thinkful-student-dash.cloudfunctions.net/sendgrid/scheduled', {
      data: {
        credentials,
        time,
        url: 'trial',
        channel
      }
    })
    .then(function (response) {
      dispatch(scheduled())
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const finished = (credentials, prof) => dispatch => {
  return axios.post('https://us-central1-thinkful-student-dash.cloudfunctions.net/sendgrid/finished', {
      data: {credentials, prof}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
