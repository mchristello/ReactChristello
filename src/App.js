import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Login from './components/UserInfo/Session/Login';
import NewUser from './components/UserInfo/Session/NewUser';
import { UserDetail } from './components/UserInfo/UserDetail';
import { UserContextProvider } from "./context/UserContext";
import { CartContextProvider } from './context/CartContext';
import { firebaseConfig } from "./utils/Firebase/firebase";
import { initializeApp } from "firebase/app";
import { BrowserRouter, Routes, Route } from 'react-router-dom';




initializeApp(firebaseConfig);

function App() {

  return (
    <BrowserRouter basename='/ReactChristello' >
      <div className="App">
        <UserContextProvider>  
          <CartContextProvider >
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenid@ a tu tienda de PADEL!.'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenid@ a tu tienda de PADEL!.'} />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<Login />} />
              <Route path='/newuser' element={<NewUser />} />
              <Route path='/userAccount' element={<UserDetail />} />
            </Routes>
          </CartContextProvider>
        </UserContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;