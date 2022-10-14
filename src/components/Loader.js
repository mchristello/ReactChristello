import { useState } from 'react';
// import Spinner from 'react-bootstrap/Spinner';
import { NewtonsCradle } from '@uiball/loaders';
import './Loader.css';





const Loader = () => {

    const [loading, setLoading] = useState(true);
    

    if (loading === true) {
        return (
            <div className='container_loading'><p className='loading'>Cargando productos...</p> <NewtonsCradle size={60} speed={1.5} color="black" /></div> 
        );
    }
}

export default Loader;