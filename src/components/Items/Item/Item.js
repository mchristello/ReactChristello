// Frameworks
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FcSearch } from 'react-icons/fc';
// React
import { Link } from 'react-router-dom';
// CSS
import './Item.css';


const Item = ( {product} ) => {

    return ( 
        <Card className='card_items'>
            <Link to={`/item/${product.id}`} > 
                <Card.Img className='card_img' variant="top" src={product.pictureUrl} />
            </Link>
            <Card.Body>
                <Card.Title><h2>{product.marca}</h2></Card.Title>
                <hr></hr>
                <Card.Subtitle className="mb-3 text-muted"><h3>{product.modelo}</h3></Card.Subtitle>
                <Card.Text as='div'>
                    <h5>Año: {product.anio}</h5>
                    <h5>Precio: ${product.price}</h5>
                </Card.Text>
                <hr></hr>
                <Button as={Link}to={`/item/${product.id}`} className="btn_agregar" variant="outline-success"> <FcSearch /> Ver Detalle</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;