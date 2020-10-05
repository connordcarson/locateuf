import React, { Component } from 'react';
 
class App extends Component {
  render() {
    return <div>
      <h4>Home</h4>
      <p>This is the Home page.</p>
    </div>
  }
}
 
export default App;

/*import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyB9Azfb4u4Om3M5Khn4_uUpHK8Ez_d2luw",
  authDomain: "locateuf-omaha.firebaseapp.com",
  databaseURL: "https://locateuf-omaha.firebaseio.com",
  storageBucket: "locateuf-omaha.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

class App extends Component {
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
        <h1>LocateUF</h1>
        <p>Add a listing below to show your space to a farmer!</p>
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <h3>Add New Listing</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  };
};

export default App;*/