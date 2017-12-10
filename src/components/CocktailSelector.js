import React from 'react';
import PropTypes from 'prop-types';
import CocktailList from './CocktailList';
import {connect} from 'react-redux';
import Cocktails from '../resources/cocktails';

class CocktailSelector extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  filterCocktails = (cocktails = [], search, selectedSpirits) => {
    let filteredCocktails = selectedSpirits > 0
      ? cocktails.filter(cocktail => selectedSpirits & cocktail.spirits)
      : cocktails;
    filteredCocktails = search.length > 0
      ? filteredCocktails.filter(cocktail => cocktail.name.toLowerCase().includes(search.toLowerCase()))
      : filteredCocktails;
    return filteredCocktails.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
  }

  render(){
    const cocktails = this.filterCocktails(Cocktails, this.state.search, this.props.selectedSpirits)
    return (
      <div className="cocktail-selector">
        <div className="cocktail-selector-header">
          <h2>Available Cocktails</h2>
          <input type="text" className="form-field" value={this.state.search} onChange={this.handleInput} placeholder="Search Cocktails"/>
        </div>
        <CocktailList cocktails={cocktails}/>
      </div>
    )
  }
}

CocktailSelector.propTypes = {
  selectedSpirits: PropTypes.number
}

export default connect(state => ({selectedSpirits: state.selectedSpirits}))(CocktailSelector);
