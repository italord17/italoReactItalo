import { useState, useEffect } from "react"
import './Container.css';
import PokemonItem from "./PokemonItem";

const PokemonListContainer = () => {

    const [pokemons, setPokemons] = useState([])
    const [nextURL, setNextURL] = useState([])

    useEffect(() => {
        getPokemons('https://pokeapi.co/api/v2/pokemon/')
    },[])

    console.log(pokemons)
    
    const getPokemons = async (url) => {
        const pokemonList = []
        const resp = await fetch(url)
        const {results, next} = await resp.json()
        for(let pokemon of results){
            const resp = await fetch(pokemon.url)
            const data = await resp.json()
            pokemonList.push(data);         
        }
        setPokemons(previos => [...previos, ...pokemonList])
        setNextURL(next)
            
    }

    const masPokemons = () => {
        getPokemons(nextURL)

    }

    return(
        <>
        <div>
            <ul className="pokemon-list">
            {
            pokemons.map(pokemon => <PokemonItem id={pokemon.id} key={pokemon.id} name={pokemon.name} 
            image={pokemon.sprites.front_shiny} types={pokemon.types}/>)
            }  
            </ul>

            <button className="btn btn-danger pokemon-list" onClick={masPokemons}> siguientes </button>

        </div>
        </>
    )
   
}

export default PokemonListContainer