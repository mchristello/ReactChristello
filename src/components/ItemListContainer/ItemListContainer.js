import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/products.js';
import Loader from '../Loader';


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        if (categoryId) {
            getProductsByCategory(categoryId)
                .then((productos) => setProducts(productos))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        } else {
            getAllProducts()
                .then((productos) => setProducts(productos))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [categoryId])

    return ( 
        <section className='itemListContainer'>
            <h1 className='greeting'>{greeting}</h1>
            <article className='intro'>
                <p>Tenemos la mejor selección de productos para vos. Ya sea que te estés iniciando en el Padel, o que seas <b>Fernando Belasteguín</b>.</p>
                <p>También trabajamos a pedido. Si necesitas algo que no encontrás en nuestro catálogo, no dudes en ponerte en contacto con nosotros a través de cualquier medio, y vamos a darte varias opciones para que te hagas con el producto que estás buscando.</p>
                <p>Sin más para decir, te dejamos para que veas y elijas. Cualquier duda nos encontramos a disposición tuya.</p>
            </article>
            {loading ? <Loader /> : <ItemList products={ products }/>}
        </section>
    );
}

export default ItemListContainer;