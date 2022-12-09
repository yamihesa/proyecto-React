import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  
  const { id } = useParams();
  useEffect(() => {
    let product;
    let promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    promise.then((products) => {
      product = products.find(
        (product) => product.id.toString() === id.toString()
      );
      setItem(product);
    });
  }, [id]);
  return (
    
    <ItemDetail item={item} />

  )
};

export default ItemDetailContainer;