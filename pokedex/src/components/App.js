import React, { Component } from 'react';

import { pokemonData } from './data/pokemonData'
import './App.css';
import { Pokedex } from './pokedex/Pokedex';

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
          <Pokedex />
        </div>
      );
    }
} 


export default App;
