import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ( {product} ) => {

    return ( 
        <Card className='card_items'>
            <Link to={`/item/${product.id}`} > 
                <Card.Img className='card_img container-fluid' variant="top" src={product.pictureUrl} />
            </Link>
            <Card.Body>
                <Card.Title><h2>{product.marca}</h2></Card.Title>
                <Card.Subtitle className="mb-3 text-muted"><h3>{product.modelo}</h3></Card.Subtitle>
                <Card.Text>
                    <h5>Año: {product.anio}</h5>
                    <h5>Precio: ${product.price}</h5>
                </Card.Text>
                <Button as={Link}to={`/item/${product.id}`} className="btn_agregar" variant="outline-success">Ver Detalle</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;