
import { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stock }) => {
  const [contador, setContador] = useState(1);
  
  const increItem  = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const decreItem = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <form className="item-count" onSubmit={(e) => e.preventDefault()}>
      <button className="onClick" onClick={decreItem}>-</button>
      <input type="number" placeholder={contador} max={stock} />
      <button className="onClick" onClick={increItem}>+</button>
    </form>
  );
};

export default ItemCount;   


