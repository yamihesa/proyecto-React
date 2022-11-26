import React from 'react'
import './navBar.css'


const CartWidget = () => {
  return (
    <div className='cart'>
    <box-icon name='cart'></box-icon>
    <span className='item_total'>3</span>
</div>
  )
}

export default CartWidget


