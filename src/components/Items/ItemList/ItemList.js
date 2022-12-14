// Components
import Item from '../Item/Item.js';
// CSS
import './ItemList.css';

const ItemsList = ( {products} ) => {

    return ( 
        <section className='item_list'>
            <h1>Listado de Productos</h1>
            <article className='item_flex'>{products.map((product) => (<Item key={product.id} product={product} />))}
            </article>
        </section>
    );
}

export default ItemsList;