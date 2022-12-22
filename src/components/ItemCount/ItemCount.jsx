import React, { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ initial, stock }) => {

    const [count, setCount] = useState(initial)

    const incre = () => count <= stock && setCount(count + 1)
    const decre = () => count > initial && setCount(count -1)

    const onAdd = () => {
        if(stock <0){
            console.log('Agregaste: ' + count + 'Productos al carrito')
        }
    }

    return (
        <>
        <div className="item_count">
            <button className="onClick" onClick={decre}>-</button>
            <p>{count}</p>
            <button className="onClick" onClick={incre}>+</button>
        </div>
        <div>
          <button className="button_agregar" onClick={onAdd} >Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount 


