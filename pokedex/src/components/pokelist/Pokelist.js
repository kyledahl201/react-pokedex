import React from 'react';
import { Pokecard } from '../pokecard/Pokecard'
import './pokelist.css'



export const Pokelist = ({ pokemons, handlePokeSearch, handleClick }) => {
    return (
        <div className="pokelist">
            
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
                        handleClick={handleClick}
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