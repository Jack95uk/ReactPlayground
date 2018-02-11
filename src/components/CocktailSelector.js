import React from 'react';
import CocktailList from './CocktailList';

class CocktailSelector extends React.Component {
  state = {
    search: '',
  }

  handleInput = (e) => {
    this.setState({
      search: e.target.value,
    });
  }

  render() {
    return (
      <div className="cocktail-selector">
        <div className="cocktail-selector-header">
          <input type="text" className="form-field" value={this.state.search} onChange={this.handleInput} placeholder="Search Cocktails" />
        </div>
        <CocktailList search={this.state.search} />
      </div>
    );
  }
}


export default CocktailSelector;
