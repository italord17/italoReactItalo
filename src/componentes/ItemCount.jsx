import { useState } from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(0);

  const handleSum = () => {
    if (contador === 5) {
      return;
    }
    setContador(contador + 1);
  };

  const handleSubstract = () => {
    if (contador === 0) {
      return;
    }
    setContador(contador - 1);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-dark btn-sm "
        onClick={handleSubstract}
      >
        {" "}
        -{" "}
      </button>
      <p>Contador: {contador}</p>
      <button
        type="button"
        className="btn btn-dark btn-sm "
        onClick={handleSum}
      >
        {" "}
        +{" "}
      </button>
      <button
        type="button"
        className="btn btn-dark btn-lg"
        onClick={() => {
          console.log("Confirmar");
        }}
      >
        {" "}
        Confirmar{" "}
      </button>
    </>
  );
};

export default ItemCount;
