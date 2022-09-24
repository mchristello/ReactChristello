import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from './ItemCount.js';
import './Item.css';

const Item = ( {product} ) => {

    return ( 
        <Card className='card_items'>
            <Card.Img variant="top" src={product.imagen} alt='{product.marca} {product.modelo}' />
            <Card.Body>
                <Card.Title><h2>{product.marca}</h2></Card.Title>
                <Card.Subtitle className="mb-3 text-muted"><h3>{product.modelo}</h3></Card.Subtitle>
                <Card.Text>
                    <h5>Año: {product.anio}</h5>
                    <h5>Precio: ${product.precio}</h5>
                </Card.Text>
                <Counter stock={product.stock}/>
                <Button className="btn_agregar" variant="outline-success">Agregar al Carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;