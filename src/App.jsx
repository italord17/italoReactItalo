import { useEffect } from "react"
import Header from "./componentes/Header"
import Nav from "./componentes/Nav"
import ItemList from "./componentes/ItemCount"
import Footer from "./componentes/footer"

const App = () => {
    

    useEffect(()=>{
        console.log(":D")
    })

    
    return (
        <>
             <Nav/>
            <Header titulo="Chronos Crosffit" subtitulo="El Box de los campeones"/>
            <ItemList cat1="musculatura   " cat2="resistencia"/>
            <Footer/>
        </>
            
    )
}

export default App