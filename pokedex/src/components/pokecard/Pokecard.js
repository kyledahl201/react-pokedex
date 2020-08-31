import React from "react";

import './pokecard.css'

export const Pokecard = ({ id, name, sprite}) => {
    return (
        <div className="pokecard">
            {
                id < 25
                ? <img className="pokemon-sprite" alt="pokemon" src={sprite} />
                : null
            }
            <p>{name}</p>
        </div>
    )

}