import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ listProducts }) => {


  return (
    <div>
       <div className="item_list">
         {listProducts.map(product => <Item key={product.id} product={product}/>)}
       </div>
    </div>
  )
}

export default ItemList 