import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CocktailList from './CocktailList';

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
    const { selectedSpirits, cocktails } = this.props;
    const filteredCocktails =
      this.filterCocktails(cocktails, this.state.search, selectedSpirits);
    return (
      <div className="cocktail-selector">
        <div className="cocktail-selector-header">
          <input type="text" className="form-field" value={this.state.search} onChange={this.handleInput} placeholder="Search Cocktails" />
        </div>
        <CocktailList cocktails={filteredCocktails} />
      </div>
    );
  }
}

CocktailSelector.propTypes = {
  selectedSpirits: PropTypes.number,
  cocktails: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    spirits: PropTypes.number,
    URL: PropTypes.string,
  })),
};

CocktailSelector.defaultProps = {
  selectedSpirits: 0,
  cocktails: [],
};

export default connect(state => ({
  selectedSpirits: state.selectedSpirits,
  cocktails: state.cocktails,
}))(CocktailSelector);
