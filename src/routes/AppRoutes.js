import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import PokemonListContainer from "../componentes/PokeContainer/pokemonListContainer";
import ItemListContainer from "../componentes/itemContainer/itemListContainer";
import Nav from "../componentes/NavBar/Nav";
import Header from "../componentes/Header/Header"
import PokeDetalles from "../componentes/PokeContainer/pokeDetalles";
    

const AppRoutes = () =>{

    return(
        <>
        <Router>
            <Nav/>
            <Switch>
                <Route path="/inicio"  exact componennt={Header}/> 
                <Route path="/objetos" exact component={ItemListContainer}/>
                <Route path="/pokemones" exact component={PokemonListContainer}/>
                <Route path="/detalle/:name" exact component={PokeDetalles}/>
           </Switch>
          
        </Router>
        </>
    )


}

export default AppRoutes