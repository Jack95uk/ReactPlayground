import React, {Component} from 'react';

import CocktailList from './CocktailList';

import Spirits from '../resources/spirits.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktailSearch: '',
      selectedSpirits: 0,
      hue: 0
    }
  }

  handleSelection = (e) => {
    let selectedSpirits = this.state.selectedSpirits;
    if (e.target.checked) {
      selectedSpirits |= Spirits[e.target.name];
    } else {
      selectedSpirits &= ~ Spirits[e.target.name];
    }
    this.setState({selectedSpirits})
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  randomiseColor = () => {
    const html = document.querySelector('html');
    let hue = Math.round(Math.random() * 360);
    html.style.setProperty('--neon-primary', `hsl(${hue}, 100%, 50%)`);
  }

  render() {
    const spiritEntries = Object.entries(Spirits).sort((a, b) => {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    });

    return (
      <div className="App">
        <h1 className="app-title" onClick={this.randomiseColor}>Happy Hour</h1>
        <div className="spirit-selector">
          <h2>Alcohol</h2>
          <div>
            <p>I have:</p>
            <div className="checkbox-group">
              {spiritEntries.map(entry => {
                const checked = (this.state.selectedSpirits & entry[1]);
                return (
                  <div key={entry[1]} className="spirit-option">
                    <label>
                      <input type="checkbox" name={entry[0]} checked={checked} onChange={this.handleSelection} style={{display:"none"}}/>
                      <span className="custom-checkbox">&otimes;</span>
                      <span>{entry[0].replace('_', ' ')}</span>
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="cocktail-selector">
          <div className="cocktail-selector-header">
            <h2>Available Cocktails</h2>
            <input type="text" name="cocktailSearch" className="form-field" value={this.state.cocktailSearch} onChange={this.handleInput} placeholder="Search Cocktails"/>
          </div>
          <CocktailList search={this.state.cocktailSearch} selectedSpirits={this.state.selectedSpirits}/>
        </div>
      </div>
    );
  }
}

export default App;
