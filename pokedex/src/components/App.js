import React, { Component } from 'react';

import { pokemonData } from './data/pokemonData'
import './App.css';

class App extends Component {
  constructor () {
      super ();

      this.state = {
        searchField: '',
        pokemons: [],
        selectedPokemon: null,
      }
  }

  componentDidMount () {
      this.setState ({ pokemons: pokemonData });
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
