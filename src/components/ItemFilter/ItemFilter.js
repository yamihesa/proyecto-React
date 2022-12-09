import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemFilter = ({items}) => {
  const [categoryState, setCategoryState] = useState('')
  const {category}  = useParams()

  useEffect(() => {
    if (category === 'productos A') {
      setCategoryState('productos A')
    } else if (category === 'productos B') {
      setCategoryState('productos B')
    } 
}, [category])


  const newItems = items.filter(item => item.category === categoryState)

  return (
    <ItemList items={newItems} />
  )
}

export default ItemFilter