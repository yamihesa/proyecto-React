import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({listProducts}) => {
  return (
    <div className='detail'>
      <div className='detail_item'>
        <img src={listProducts.img} alt={listProducts.name} className='detail_img' />
        <h1>{listProducts.name}</h1>
        <p><b>${listProducts.price}</b></p>
        <p>{listProducts.specs}</p>
        <ItemCount stock={10} initial={0} />
        <button className='detail_button'>Comprar</button>
      </div>  
    </div> 
  )
}

export default ItemDetail