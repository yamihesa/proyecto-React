import React from 'react'
import { useEffect, useState } from 'react'
import { products } from '../fetchProducts/data'
import { fetchProducts } from '../fetchProducts/fetchProducts'
import ItemList from '../ItemList/ItemList'
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loading'
import './ItemListContainer.css'

const ItemListContainer = () => {

  const [listProducts, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
    const { category } = useParams()



    useEffect(() => {
        setLoading(true)
        fetchProducts(category ? products.filter(listProducts => listProducts.category === category) : products)
            .then(res => {
                setProducts(res)
                setLoading(false)
            })
    }, [category])

    
    return (
        <div className='container'>
            { loading ?
                <Loader/>:                         
                <ItemList listProducts={listProducts} /> }             
        </div>
    )
}
<ItemCount initial={1} stock={4} onAdd={() => {}}/> 

export default ItemListContainer