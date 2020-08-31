import React from "react";

import "./pokedex.css";
import { Pokelist } from "../pokelist/Pokelist";

export const Pokedex = ({ pokemons, handlePokeSearch }) => {
 
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <Pokelist 
        handlePokeSearch={handlePokeSearch}
        pokemons={pokemons} />
      </div>
      <div className="pokesearchresult-container"></div>
    </div>
  );
};
