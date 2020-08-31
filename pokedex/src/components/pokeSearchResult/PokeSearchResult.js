import React from "react";
import "./poke-search-result.css";

export const PokeSearchResult = ({ showResult, name, sprite, id, height, weight }) => {
    return (
        <div className="poke-result-card">
                {
                    showResult
                        ? <div>
                                <img className="pokemon-aniomated-sprite" alt="pokemonm" src={sprite}></img>
                                <p>id: {id}</p>
                                <p>name: {name}</p>
                                <p>height: {height} ft</p>
                                <p>weight: {weight} kilo </p>
                            </div>
                            :<h2>
                                Professor Oak's Pokedex
                            </h2>
                }
        </div>
    )
}
