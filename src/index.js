import React from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, compose} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import happyHour from './reducers/index';
import App from './components/App';

//import * as actionCreators from './actions/actionCreators';

import './stylesheets/css/index.css';

function mapStateToProps(state) {
  return {
    cocktails: state.cocktails,
    hue: state.hue,
    selectedSpirits: state.selectedSpirits
  }
}

// function MapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

const Main = connect(mapStateToProps)(App);

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

let store = createStore(happyHour, enhancers);

render(<Provider store={store}>
  <Main/>
</Provider>, document.getElementById('root'));

registerServiceWorker();
