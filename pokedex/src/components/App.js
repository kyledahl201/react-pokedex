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
    this.setState({ searchField: searchValue });
  }

  handleClick = (name) => {
    alert("coming from app");
  }

    render () {
      const { pokemons, searchField } = this.state;
      let searchedPokemons = pokemons.filter(pokemon => {
          return pokemon.name
            ? pokemon.name.toLowerCase().includes(searchField.toLowerCase())
            : false
      })
      return (
        <div className="App">
          <h1>Pokedex</h1>
          <Pokedex 
          handlePokeSearch={this.handlePokeSearch}
          pokemons={searchedPokemons}
          handleClick={this.handleClick} />
        </div>
      );
    }
} 


export default App;
