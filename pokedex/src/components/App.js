import React, { Component } from 'react';

import { pokemonData } from './data/pokemonData'
import './App.css';

class App extends Component {
  constructor () {
      super ();
  }

    render () {
      return (
        <div className="App">
          <h1>Pokedex</h1>
        </div>
      );
    }
} 


export default App;
