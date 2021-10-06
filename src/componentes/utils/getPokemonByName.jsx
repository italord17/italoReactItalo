import { useEffect, useState } from "react";
import Pokemon from "../PokeContainer/pokemon";
import "../PokeContainer/Container.css"




const PokemonDetalle =() =>{
    
    const [pokemonNombre, setPokemon] = useState()

    const pokeName = async () =>{        
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const resulst = await response.json()
        setPokemon(resulst)
        console.log(resulst);
    }

    useEffect(() => {
        pokeName()
    },[])


    return(
      <ul className="pokemon-list">
          {pokemonNombre.map((pokemon) => (
            <Pokemon
              id={pokemon.id}
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_shiny}
              types={pokemon.types}
            />
          ))}
        </ul>
    )
      
    

    
}

export default PokemonDetalle