import React from 'react';
import firebase from 'firebase';

import * as Spirits from '../resources/spirits';

import SpiritCheckbox from './SpiritCheckbox';

class AddCocktailForm extends React.Component {
  state = {
    name: '',
    url: '',
    selectedSpirits: 0,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const cocktailsRef = firebase.database().ref('cocktails');
    const { name, url, selectedSpirits } = this.state;

    cocktailsRef.push({
      name,
      url,
      spirits: selectedSpirits,
    }, () => {
      this.setState({
        name: '',
        url: '',
        selectedSpirits: 0,
      });
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleCheckboxChange = (e) => {
    const { selectedSpirits } = this.state;
    if (e.target.checked) {
      this.setState({
        selectedSpirits: selectedSpirits | Spirits[e.target.name],
      });
    } else {
      this.setState({
        selectedSpirits: selectedSpirits & ~Spirits[e.target.name],
      });
    }
  }

  render() {
    const { name, url, selectedSpirits } = this.state;
    const spirits = Object.entries(Spirits)
      .map(([spiritName, value]) => ({ spiritName, value }))
      .sort((a, b) => {
        if (a.spiritName > b.spiritName) return 1;
        return a.spiritName < b.spiritName ? -1 : 0;
      });
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <h3>Add Your Own Cocktail</h3>
          <input
            type="text"
            name="name"
            className="form-field"
            placeholder="Cocktail Name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <input
            type="url"
            name="url"
            className="form-field"
            placeholder="URL"
            value={url}
            onChange={this.handleChange}
            required
          />
          <div>
            {spirits.map(({ spiritName, value }) => (
              <SpiritCheckbox
                key={spiritName}
                name={spiritName}
                checked={!!(selectedSpirits & value)}
                onChange={this.handleCheckboxChange}
                prefix="AddCocktailForm_"
              />
            ))}
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddCocktailForm;
