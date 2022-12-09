import { Link } from 'react-router-dom'
import './item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ item }) => {
  return (
    <div className='item'>
      <Link to={`/producto/${item.id}`}>
      <img src={item.img} alt='' />
        <p>{item.name}</p>
        <p>${item.price}</p>
      </Link>
      <ItemCount stock={10}/>
        <span>Stock{item.stock}</span>
        <button>Comprar</button>
    </div>
  )
}

export default Item