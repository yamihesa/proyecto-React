/* import React from 'react'
import './cartwidget.css'


const CartWidget = () => {
  return (
    
    <div className='cart'>
    <box-icon type='solid' name='cart'></box-icon>
    <span className='item_total'>3</span>
    </div>
  )
}

export default CartWidget */


import React from 'react'
import './cartwidget.css'

const CartWidget = () => {
  return (
    <div className='cart'>
      <box-icon type='solid' name='cart'></box-icon>
      <span className='item_total'>0</span>
    </div>
  )
}

export default CartWidget