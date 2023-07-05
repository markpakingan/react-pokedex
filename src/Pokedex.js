import React from "react";

const Pokedex = () => {

    const pokemonData = [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ]

    return (
        <>
          <div className="pokedex-div">
            {pokemonData.map((pokemon)=> (
                <div className="pokedex-block" key={pokemon.id}>
                    {/* <p> ID: {pokemon.id}</p> */}
                    <p className="pokedex-name"> {pokemon.name}</p>
                    <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    alt={pokemon.name}
                    />
                    <p> Type: {pokemon.type}</p>
                    <p> exp: {pokemon.base_experience}</p>
                </div>            
            ))}
            </div>     
        </>
        
    )

}

export default Pokedex;
