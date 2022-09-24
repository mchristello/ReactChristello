import './App.css';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenid@ a tu tienda de PADEL!.'}/>
    </div>
  );
}

export default App;