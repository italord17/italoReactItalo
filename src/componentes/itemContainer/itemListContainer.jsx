import { useEffect, useState } from "react";
import Itempokemon from "./itemList/itemPokemon";

const ItemListContainer = () => {
  const [items, setItem] = useState([]);
  const [nextURL, setNextURL] = useState([]);

  useEffect(() => {
    getItems("https://pokeapi.co/api/v2/item");
  }, []);

  console.log(items);

  const getItems = async (url) => {
    const itemList = [];
    const resp = await fetch(url);
    const { results, next } = await resp.json();
    for (let item of results) {
      const resp = await fetch(item.url);
      const data = await resp.json();
      itemList.push(data);
    }
    setItem((previos) => [...previos, ...itemList]);
    setNextURL(next);
  };

  const masItems = () => {
    getItems(nextURL);
  };

  return (
    <>
      <div>
        <ul className="pokemon-list">
          {items.map((item) => (
            <Itempokemon
              id={item.id}
              key={item.id}
              name={item.name}
              image={item.sprites.default}
            />
          ))}
        </ul>

        <button className="btn btn-danger pokemon-list" onClick={masItems}>
          {" "}
          siguientes{" "}
        </button>
      </div>
    </>
  );
};

export default ItemListContainer;
