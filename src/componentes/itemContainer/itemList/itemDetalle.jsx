import React from "react";
import { useParams } from "react-router";

const ItemDetalles = () => {
  const { name } = useParams();
  console.log(name);
  return <div></div>;
};

export default ItemDetalles;
