import './itemdetail.css'


const ItemDetail = ({ item }) => {
  const { img, name, price } = item
  
  return (
    <div className='detail'>
      <div className='detailInfo'>
        <img src={img} alt='' loading='lazy'/>
      </div>
      <div className='detailOpcion'>
        <h3>{name}</h3>
        <h4>{price}</h4>
      </div>
    </div>
  )
}

export default ItemDetail