import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='cart'>
      <img src="https://img.icons8.com/ios-glyphs/344/shopping-cart--v1.png" alt="shopping cart icon" className="icon"/>
    <span className="item_total"> 0 </span>
      
    </div>
  )
}

export default CartWidget 

