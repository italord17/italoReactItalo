

const Pokemon = ({ name, image, types, id }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title pokemon-list">
          {id} - {name}
        </h5>

        
      </div>
    </div>
  );
};

export default Pokemon;