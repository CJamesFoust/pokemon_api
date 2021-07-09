import React, { useContext, useState } from 'react';
import styles from './Button.module.css';
import PokemonContext from '../context/PokemonContext';

const Button = () => {
    const { pokemon, setPokemon } = useContext(PokemonContext);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response => {
            return response.json();
        }).then(response => {
            setPokemon(response.results);
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <button onClick={ fetchPokemon }>Fetch Pokemon</button>
    )
}

export default Button;