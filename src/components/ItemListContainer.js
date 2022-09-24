import './ItemListContainer.css';
import ItemList from './ItemList.js';
import Paletero from '../productos.json';


const ItemListContainer = ({ greeting }) => {

    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Paletero);
        }, 2000);
    })

    prom.then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });

    return ( 
        <section className='itemListContainer'>
            <h1 className='greeting'>{greeting}</h1>
            <article className='intro'>
                <p>Tenemos la mejor selección de productos para vos. Ya sea que te estés iniciando en el Padel, o que seas <b>Fernando Belasteguín</b>.</p>
                <p>También trabajamos a pedido. Si necesitas algo que no encontrás en nuestro catálogo, no dudes en ponerte en contacto con nosotros a través de cualquier medio, y vamos a darte varias opciones para que te hagas con el producto que estás buscando.</p>
                <p>Sin más para decir, te dejamos para que veas y elijas. Cualquier duda nos encontramos a disposición tuya.</p>
            </article>
            <ItemList products={Paletero}/>
        </section>
    );
}

export default ItemListContainer;