import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({product}) => { 

  return (
   
      <div className="item"> 
        <div className="card_body"> 
        <img  id='img-card' src={product.img} className="card_img" alt={product.name} /> 
          <h5 className="card_title">{product.name}</h5>
          <p className="card_text">${product.price}</p>
          <Link to={'/item/' + product.id}>Detalle</Link>
        </div>
      </div>
    
  )
}

export default Item