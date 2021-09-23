import Item from "./item"

const ItemList = ({productos}) => {
    return(
        <ul>
            {productos.map((producto,indice)=>{
                return<Item producto = {producto}/>
            })}
        </ul>
    )
}


export default ItemList