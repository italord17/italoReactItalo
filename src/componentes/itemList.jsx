import Item from "./item"

const ItemList = ({productos}) => {
    return(
        <>
        <ul  >
            {productos.map((producto)=>{
                return<Item producto = {producto}/>
            })}
        </ul>
        </>
    )
}


export default ItemList