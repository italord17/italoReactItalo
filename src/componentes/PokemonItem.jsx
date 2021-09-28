import ItemCount from "./ItemCount"

const PokemonItem = ({name, image, types, id}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={image} className="card-img-top" alt="..."  />
            <div className="card-body">
                <h5 className="card-title pokemon-list">{id} - {name}</h5>
                <ul className="card-text">
                {
                types.map(type => <li className="pokemon-list" key={type.slot}>{type.type.name}</li>)
                }
                </ul>
                <a href="#.." className="btn btn-danger pokemon-list"> <ItemCount/> </a>
            </div>
        </div>
    )
}

export default PokemonItem