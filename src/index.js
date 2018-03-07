import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

import * as firebase from 'firebase';
import mixpanel from 'mixpanel-browser';
import MixpanelProvider from 'react-mixpanel';

const config = {
  databaseURL: "https://thinkful-student-dash.firebaseio.com/"
}

mixpanel.init("067d7dda219deeb3180d04c581ca4c38");
firebase.initializeApp(config)

ReactDOM.render(
  <Provider store={store}>
    <MixpanelProvider mixpanel={mixpanel}>
      <App />
    </MixpanelProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
