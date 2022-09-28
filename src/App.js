import './App.css';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import React, { useEffect, useState } from 'react';



function App() {
  
  const [paletero, setPaletero] = useState([])
  useEffect(()=> {
      setTimeout(()=> {
          fetch("../productos.json")
          .then(response => console.log(response.json()))
          // .then((data) => setPaletero(data))
      }, 2000)
  }, [])

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenid@ a tu tienda de PADEL!.'}/>
    </div>
  );
}

export default App;