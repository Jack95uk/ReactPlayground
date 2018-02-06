import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CocktailSelector from './CocktailSelector';
import SpiritSelector from './SpiritSelector';

import { updateHue } from '../actions';

import GetAndLoadCocktails from '../utilities';

class App extends Component {
  static propTypes = {
    hue: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidUpdate() {
    const html = document.querySelector('html');
    html.style.setProperty('--neon-primary', `hsl(${this.props.hue}, 100%, 50%)`);
  }

  randomiseColor = () => {
    const hue = Math.round(Math.random() * 360);
    this.props.dispatch(updateHue(hue));
  }

  handleLoadCocktails = () => {
    GetAndLoadCocktails(this.props.dispatch);
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Happy Hour</h1>

        <button onClick={this.randomiseColor}>Mix it up!</button>
        <button onClick={this.handleLoadCocktails}>Try Something New</button>

        <div className="grid">
          <SpiritSelector />
          <CocktailSelector />
        </div>
      </div>
    );
  }
}

export default connect(state => ({ hue: state.hue }))(App);
