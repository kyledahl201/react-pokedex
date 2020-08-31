import React from "react";

import "./pokedex.css";

export const Pokedex = ({ pokemons }) => {
  console.log (pokemons[0]);
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        {
          pokemons.map (pokemon => {
          return <p>{pokemon.name}</p>
          })

        }
      </div>
      <div className="pokesearchresult-container"></div>
    </div>
  );
};
