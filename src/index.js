import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import firebase from 'firebase/app';

import registerServiceWorker from './registerServiceWorker';
import * as Reducers from './reducers/index';
import App from './components/App';

import './stylesheets/index.scss';

const config = {
  apiKey: 'AIzaSyBNztGFPywYUsIZCtlxNbQ0jUWpy7W5ceQ',
  authDomain: 'happy-hour-firebase.firebaseapp.com',
  databaseURL: 'https://happy-hour-firebase.firebaseio.com',
  projectId: 'happy-hour-firebase',
  storageBucket: '',
  messagingSenderId: '431059344460',
};
firebase.initializeApp(config);

// eslint-disable-next-line no-underscore-dangle
const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

const store = createStore(combineReducers(Reducers), enhancers, applyMiddleware(Thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
