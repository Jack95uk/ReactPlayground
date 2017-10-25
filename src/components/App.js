import React, {Component} from 'react';

import CocktailList from './CocktailList';

import Spirits from '../resources/spirits.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      selectedSpirits: 0
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



  render() {
    const spiritEntries = Object.entries(Spirits).sort((a, b) => a[0] > b[0]);

    return (
      <div className="App">
        <h1 className="app-title">Happy Hour</h1>
          <div className="spirit-selector">
            <h2>Spirits</h2>
            <div className="checkbox-group">
              {spiritEntries
                .map(entry => {
                const checked = (this.state.selectedSpirits & entry[1]);
                return (
                  <div key={entry[1]} className="spirit-option">
                    <label>
                      <input type="checkbox" name={entry[0]} checked={checked} onChange={this.handleSelection}/>
                      <span>{entry[0].replace('_', ' ')}</span>
                    </label>
                  </div>
                )
              })}

            </div>
          </div>
          <div className="cocktail-selector">
            <h2>Cocktails you can make</h2>
            <input type="text" name="search" className="form-field" value={this.state.search} onChange={this.handleInput} placeholder="Search Cocktails"/>

            <CocktailList search={this.state.search} selectedSpirits={this.state.selectedSpirits}/>
          </div>
      </div>
    );
  }
}

export default App;
