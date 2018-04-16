import React from 'react';
import firebase from 'firebase';
import CocktailList from './CocktailList';
import AddCocktailForm from './AddCocktailForm';

class CocktailSelector extends React.Component {
  state = {
    search: '',
    cocktails: {},
  }

  componentWillMount() {
    const db = firebase.database().ref('cocktails');

    db.on('value', (snapshot) => {
      this.setState({
        cocktails: snapshot.val(),
      });
    });
  }

  componentWillUnmount() {
    firebase.database().ref('cocktails').off();
  }

  handleInput = (e) => {
    this.setState({
      search: e.target.value,
    });
  }

  render() {
    const { search, cocktails } = this.state;
    return (
      <div className="cocktail-selector">
        <div className="cocktail-selector-header">
          <input type="text" className="form-field" value={search} onChange={this.handleInput} placeholder="Search Cocktails" />
        </div>
        <AddCocktailForm />
        <CocktailList cocktails={cocktails} search={search} />
      </div>
    );
  }
}


export default CocktailSelector;
