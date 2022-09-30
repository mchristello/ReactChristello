import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import React, { useEffect, useState } from 'react';
import Paletero from '../../productos.json';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({ greeting }) => {

    const [paletero, setPaletero] = useState([]);
    const [loading, setLoading] = useState(true);

    const prom = new Promise((resolve) => {
        setTimeout(() => {
            resolve(Paletero);
        }, 3000);
    })

    useEffect (()=> {
        prom
        .then((res) => setPaletero(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, []);


    const { categoryName } = useParams();
    useEffect(()=> {
        console.log(categoryName);
    }, [categoryName])

    return ( 
        <section className='itemListContainer'>
            <h1 className='greeting'>{greeting}</h1>
            <article className='intro'>
                <p>Tenemos la mejor selección de productos para vos. Ya sea que te estés iniciando en el Padel, o que seas <b>Fernando Belasteguín</b>.</p>
                <p>También trabajamos a pedido. Si necesitas algo que no encontrás en nuestro catálogo, no dudes en ponerte en contacto con nosotros a través de cualquier medio, y vamos a darte varias opciones para que te hagas con el producto que estás buscando.</p>
                <p>Sin más para decir, te dejamos para que veas y elijas. Cualquier duda nos encontramos a disposición tuya.</p>
            </article>
            {loading ? <div className='container_loading'><p className='loading'>Cargando productos...</p> <Spinner animation="border" variant="primary" size="xl" /></div> : <ItemList products={ paletero }/>}
        </section>
    );
}

export default ItemListContainer;