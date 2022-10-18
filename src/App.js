import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import { CartContextProvider } from './context/CartContext';

function App() {

  return (
    <BrowserRouter basename='/ReactChristello' >
      <div className="App">
        <CartContextProvider >
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenid@ a tu tienda de PADEL!.'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenid@ a tu tienda de PADEL!.'} />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
          </Routes>
        </CartContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;