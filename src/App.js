import React from 'react';
import './index.css';
import '../src/components/NavBar/navBar.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'boxicons' 

function App() {
  return (
    <div className="App">
      <NavBar/>        
      
      <ItemListContainer
      titulo='Bienvenidos a Coherencia Cuántica' 
      subtitulo='Talleres de Terapias Alternativas'/>
      
    </div>
  );
}

export default App;
