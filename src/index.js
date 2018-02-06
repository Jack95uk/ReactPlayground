import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import * as Reducers from './reducers/index';
import App from './components/App';

import './stylesheets/css/index.css';

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(combineReducers(Reducers), enhancers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
