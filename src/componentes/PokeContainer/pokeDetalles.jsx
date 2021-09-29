import React from "react"
import { useParams } from "react-router"



const PokeDetalles = () => {

    const {name} = useParams()
    console.log(name) 
    return (
        <div>
           
        </div>
    )
}

export default PokeDetalles