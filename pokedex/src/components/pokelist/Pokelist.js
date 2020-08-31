import React from 'react';
import { Pokecard } from '../pokecard/Pokecard'
import './pokelist.css'
import { Searchbox } from '../searchbox/Searchbox';


export const Pokelist = ({ pokemons, handlePokeSearch }) => {
    return (
        <div className="pokelist">
            <Searchbox handlePokeSearch={handlePokeSearch} />
            {
                pokemons.map(pokemon => {
                    let sprite = null;
                    try {
                        sprite = JSON.parse(pokemon.sprites);
                        sprite = sprite.normal;
                    } catch (error) {

                    }
                    return pokemon.name 
                    ? <Pokecard 
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        sprite={sprite} />
                    : null  
                })
            }
        </div>
    )
}