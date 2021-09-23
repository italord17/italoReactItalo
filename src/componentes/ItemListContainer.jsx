import { useEffect,useState } from "react";
import { Spinner } from "react-bootstrap";
import ItemList from "./itemList";


const productoInical = [
    {id:1,Nombre:"Prod 1",Precio:75},
    {id:2,Nombre:"Prod 2",Precio:300}
]

const ItemListContainer = () => {

    const [productos,setProductos] = useState ([])

    useEffect(()=>{ 
        const asinc = new Promise ((resolver)=>{
            setTimeout(() => {
                resolver(productoInical)
           }, 2000);
        })

        asinc.then((resultado)=>{
            setProductos(resultado)
                  
        })
    })
    if(productos.length > 0){
        return(
            <>
                <ItemList productos={productos}/>
            </>
        )
    }else{
        return(
            <>
            <p>Cargando ...</p>
            </>
        )
    }
}

export default ItemListContainer