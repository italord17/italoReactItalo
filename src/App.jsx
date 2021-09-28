import { useEffect } from "react"
import Header from "./componentes/Header"
import Nav from "./componentes/Nav"
import ItemListContainer from "./componentes/itemListContainer"
import Footer from "./componentes/footer"
import PokemonListContainer from "./componentes/pokemonListContainer"

const App = () => {
    

    useEffect(()=>{
        console.log(":D")
    })

    
    return (
        <>
             <Nav/>
            <Header titulo="Chronos Crosffit" subtitulo="El Box de los campeones"/>
            <ItemListContainer cat1="musculatura   " cat2="resistencia"/>
            <PokemonListContainer/>
            <Footer/>
        </>
            
    )
}

export default App
