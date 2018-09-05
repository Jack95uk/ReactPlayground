import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CocktailSelector from './CocktailSelector';
import SpiritSelector from './SpiritSelector';
import AddCocktailForm from './AddCocktailForm';

import { updateHue } from '../actions/actionCreators';

import { GetAndLoadCocktails } from '../actions/thunks';

class App extends Component {
  static propTypes = {
    hue: PropTypes.number.isRequired,
    updateHue: PropTypes.func.isRequired,
    getAndLoadCocktails: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.setHTMLColor();
  }

  componentDidUpdate() {
    this.setHTMLColor();
  }

  setHTMLColor = () => {
    const html = document.querySelector('html');
    html.style.setProperty('--neon-primary', `hsl(${this.props.hue}, 100%, 50%)`);
  }

  randomiseColor = () => {
    const hue = Math.round(Math.random() * 360);
    this.props.updateHue(hue);
  }

  handleLoadCocktails = () => {
    this.props.getAndLoadCocktails();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="app-title">Happy Hour</h1>

          <button onClick={this.randomiseColor}>Mix it up!</button>
          <button onClick={this.handleLoadCocktails}>Try Something New</button>

          <div className="grid">
            <aside>
              <SpiritSelector />
              <AddCocktailForm />
            </aside>
            <main>
              <CocktailSelector />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hue: state.hue,
});

const mapDispatchToProps = dispatch => ({
  updateHue: int => dispatch(updateHue(int)),
  getAndLoadCocktails: () => dispatch(GetAndLoadCocktails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
