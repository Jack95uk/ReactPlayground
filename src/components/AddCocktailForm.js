import React from 'react';
import firebase from 'firebase';

import * as Spirits from '../resources/spirits';

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
    if (e.target.checked) {
      this.setState({
        selectedSpirits: this.state.selectedSpirits | e.target.value,
      });
    } else {
      this.setState({
        selectedSpirits: this.selectedSpirits & ~e.target.value,
      });
    }
  }

  render() {
    const { name, url, selectedSpirits } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={name} onChange={this.handleChange} required />
        <input type="url" name="url" value={url} onChange={this.handleChange} required />
        <div>
          {Object.keys(Spirits).map(key => (
            <div key={key}>
              <label htmlFor={`AddCocktailForm_${key}`}>
                <input id={`AddCocktailForm_${key}`} type="checkbox" value={Spirits[key]} checked={selectedSpirits & Spirits[key]} onChange={this.handleCheckboxChange} />
                {key}
              </label>
            </div>
          ))}
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
}

export default AddCocktailForm;
