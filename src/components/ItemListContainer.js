import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return ( 
        <section>
            <h1 className='greeting'>{greeting}</h1>
        </section>
    );
}

export default ItemListContainer;