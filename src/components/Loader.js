// Frameworks
import { ChaoticOrbit } from '@uiball/loaders'
// CSS
import './Loader.css';






const Loader = () => {

    return (
        <div className='container_loading'>
            <p className='loading'>Cargando productos...</p> 
            <ChaoticOrbit size={30} speed={1.5} color="red" />
        </div> 
    );
}

export default Loader;