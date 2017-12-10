import React, {Component} from 'react';
import {connect} from 'react-redux';

import CocktailSelector from './CocktailSelector';
import SpiritSelector from './SpiritSelector';

import {updateHue} from '../actions/actionCreators';

class App extends Component {

  componentDidUpdate() {
    const html = document.querySelector('html');
    html.style.setProperty('--neon-primary', `hsl(${this.props.hue}, 100%, 50%)`);
  }

  randomiseColor = () => {
    let hue = Math.round(Math.random() * 360);
    this.props.dispatch(updateHue(hue));
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title" onClick={this.randomiseColor}>Happy Hour</h1>
        <SpiritSelector/>
        <CocktailSelector/>
      </div>
    );
  }
}

export default connect(state => ({hue: state.hue}))(App);
