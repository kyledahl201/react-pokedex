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

  handlePokeSearch = (searchValue) => {
    alert(searchValue)
  }

    render () {
      return (
        <div className="App">
          <h1>Pokedex</h1>
          <Pokedex 
          handlePokeSearch={this.handlePokeSearch}
          pokemons={this.state.pokemons} />
        </div>
      );
    }
} 


export default App;
