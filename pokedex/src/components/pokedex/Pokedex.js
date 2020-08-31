import React from "react";

import "./pokedex.css";
import { Pokelist } from "../pokelist/Pokelist";
import { PokeSearchResult } from "../pokeSearchResult/PokeSearchResult";
import { Searchbox } from '../searchbox/Searchbox';

export const Pokedex = ({ pokemons, handlePokeSearch, handleClick, selectedPokemon }) => {
 
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
      <Searchbox handlePokeSearch={handlePokeSearch} />
        <Pokelist 
        handlePokeSearch={handlePokeSearch}
        pokemons={pokemons}
        handleClick={handleClick} />
      </div>
      <div className="pokesearchresult-container">
        {
          selectedPokemon
          ? <PokeSearchResult
              showResult={true}
              name={selectedPokemon.name} />
              : <PokeSearchResult
                  showResult={false} />
        }
      </div>
    </div>
  );
};
