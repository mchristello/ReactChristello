import Item from './Item.js';
import './ItemList.css';

const ItemsList = ({products}) => {
    
    return ( 
        <section className='item_list'>
            <h1>Listado de los Items</h1>
            <article className='item_grid'>{products.map((product) => (<Item key={product.id} product={product} />))}
            </article>
        </section>
    );
}

export default ItemsList;