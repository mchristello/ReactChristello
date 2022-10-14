import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import { CartContextProvider } from './context/CartContext';
// import { useEffect } from 'react';
// import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

function App() {

  // // Acceso a un documento específico -> Debiera ir en el Detail
  // useEffect(()=> {
  //   // Obtenemos la base de datos
  //   const database = getFirestore();

  //   //Obtener referencia del documento
  //   const itemReference = doc(database, 'items', 'k4lf1GYbipAsTgmuQtas');

  //   // obtener el documento a partir de la referencia 
  //   getDoc(itemReference) 
  //     .then((snapshot) => {
  //       //Preguntamos si el documento existe
  //       if(snapshot.exists()) {
  //         // Armamos un objeto literal con el ID y los demás campos.
  //         const item = {
  //           id: snapshot.id,
  //           ...snapshot.data()
  //         }
  //         console.table(item);
  //       }
  //     })
  //     .cath(err => console.log(err));
  // }, []);


  // // Acceso a una colección -> Debiera ir en el List
  // useEffect(()=> {
  //   // Obtenemos la base de datos
  //   const database = getFirestore();

  //   // Obtenemos la referencia a la colección 
  //   const collectionReference = collection(database, 'items');
  //   //  Obtenemos los datos a partir de la referencia
  //   getDocs(collectionReference)
  //     .then((snapshot) => {
  //       // Armamos un listado con los objetos literales
  //       const list = snapshot
  //       .docs()
  //       .map((doc) => ({
  //         id: doc.id,
  //         ...doc.data()
  //       }));
  //       console.log(list);
  //     })
  //     .cath(error => console.log(error));
  // }, []);

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