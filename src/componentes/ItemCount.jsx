import {useState} from "react"

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const handleSum = () => {
        if(contador === 5){
            return;
        }
        setContador(contador + 1);
    }

    const handleSubstract = () => {
        if(contador === 0){
            return;
        } 
        setContador(contador - 1);
    }
    
    return(
        <>

        <p>Contador: {contador}</p>
        
        <button onClick={handleSum}> Aumentar Contador </button>
        <button onClick={handleSubstract}> Disminuir Contador </button>
        <button onClick={() => { console.log("Confirmar") } }> Confirmar </button>
                
        </>
  
        
    )
}

export default ItemCount

