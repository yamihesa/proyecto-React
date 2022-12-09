
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import NavBar from './components/NavBar/NavBar';
import Home from './routes/Home/Home';
import Products from './routes/Products/Products';
import ProductById from './routes/ProductById/ProductById';
import 'boxicons'


function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductById />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
