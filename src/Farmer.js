import React, { Component } from 'react';
import Table from './Table';
//import Form from './Form';

class Farmer extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <h1>Availabe Space</h1>
        <p>Browse the list below for current spaces for rent/ownership.</p>
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  };
};

export default Farmer;