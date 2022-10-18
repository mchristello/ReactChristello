import { useState } from 'react';
import { ChaoticOrbit } from '@uiball/loaders'

import './Loader.css';





const Loader = () => {

    const [loading, setLoading] = useState(true);
    

    if (loading === true) {
        return (
            <div className='container_loading'><p className='loading'>Cargando productos...</p> <ChaoticOrbit size={30} speed={1.5} color="red" /></div> 
        );
    }
}

export default Loader;