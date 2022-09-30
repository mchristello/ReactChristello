import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CarritoDeCompras from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';



function App() {

  return (
    <BrowserRouter >
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenid@ a tu tienda de PADEL!.'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenid@ a tu tienda de PADEL!.'} />} />
          <Route path='/cart' element={<CarritoDeCompras />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;