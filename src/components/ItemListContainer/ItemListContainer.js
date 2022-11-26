import React from 'react'
import './ItemList.css'

const ItemListContainer = (greeting) => {
  return (
      <div>

        <p className='titulo'>"{greeting.titulo}"</p>     
        <h2 className='subtitulo'>{greeting.subtitulo}</h2>
            
      </div>
  );
};


export default ItemListContainer
