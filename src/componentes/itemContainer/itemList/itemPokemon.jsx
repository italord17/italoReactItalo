import { Link } from "react-router-dom";

const Itempokemon = ({ name, image, id }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title pokemon-list">
          {id} - {name}
        </h5>
        <ul className="card-text"></ul>
        <Link to={`/detalle/${name}`} className="btn btn-danger pokemon-list">
          {" "}
          detalles{" "}
        </Link>
      </div>
    </div>
  );
};

export default Itempokemon;
