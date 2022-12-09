import { useEffect, useState } from "react";
import products  from "../../data/products";
import ItemList from "../ItemList/ItemList"; 
import  ItemFilter from "../ItemFilter/ItemFilter";
import "./Itemlistcontainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    
    promise.then((product) => {
      setItems(product);
    });
  }, []);

  return (
    <div className="item-list-container">
        
    <ItemFilter items={items} />
      
    <ItemList items={items} />
    </div>
  );
  }

export default ItemListContainer