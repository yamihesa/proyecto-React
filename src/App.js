import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './routes/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path={'/'} element={<Home/>}/>
        <Route path={'Inicio'} element={<Home/>}/>
        <Route path={'/category/:category'} element={<ItemListContainer/>}/>
        <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
      </Routes>  
      </BrowserRouter>
   
    </div>
  );
}

export default App;
