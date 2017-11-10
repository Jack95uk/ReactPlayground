import React from 'react';
import CocktailList from './CocktailList';
//import {connect} from 'react-redux';

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

  render(){
    return (
      <div className="cocktail-selector">
        <div className="cocktail-selector-header">
          <h2>Available Cocktails</h2>
          <input type="text" className="form-field" value={this.state.search} onChange={this.handleInput} placeholder="Search Cocktails"/>
        </div>
        <CocktailList search={this.state.search} {...this.props}/>
      </div>
    )
  }
}

export default CocktailSelector;
