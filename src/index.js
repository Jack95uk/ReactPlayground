import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import * as Reducers from './reducers/index';
import App from './components/App';

import './stylesheets/index.scss';

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(combineReducers(Reducers), enhancers, applyMiddleware(Thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
