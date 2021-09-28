
const Item = ({producto}) => {
    return (
        <>
         <h2 >{producto.id}:{producto.Nombre} - ${producto.Precio}</h2>
        </>
    )
}

export default Item