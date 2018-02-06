import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CocktailList from './CocktailList';
import Cocktails from '../resources/cocktails';

class CocktailSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      search: e.target.value,
    });
  }

  filterCocktails = (cocktails = [], search, selectedSpirits) => {
    let filteredCocktails = selectedSpirits > 0
      ? cocktails.filter(cocktail => selectedSpirits & cocktail.spirits)
      : cocktails;
    filteredCocktails = search.length > 0
      ? filteredCocktails.filter(cocktail =>
        cocktail.name.toLowerCase().includes(search.toLowerCase()))
      : filteredCocktails;
    return filteredCocktails.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }

  render() {
    const cocktails =
      this.filterCocktails(Cocktails, this.state.search, this.props.selectedSpirits);
    return (
      <div className="cocktail-selector">
        <div className="cocktail-selector-header">
          <h2>Available Cocktails</h2>
          <input type="text" className="form-field" value={this.state.search} onChange={this.handleInput} placeholder="Search Cocktails" />
        </div>
        <CocktailList cocktails={cocktails} />
      </div>
    );
  }
}

CocktailSelector.propTypes = {
  selectedSpirits: PropTypes.number,
};

CocktailSelector.defaultProps = {
  selectedSpirits: 0,
};

export default connect(state => ({ selectedSpirits: state.selectedSpirits }))(CocktailSelector);
