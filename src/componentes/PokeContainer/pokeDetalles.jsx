import React from "react";
import { useParams } from "react-router";
import Pokemon from "./pokemon";



  const PokeDetalles = () => {
      const {name} = useParams ()
      console.log(name);
          
      return(
        <>
          <h1>{name}</h1>
          <Pokemon/>
         </> 
      )
  }

export default PokeDetalles



