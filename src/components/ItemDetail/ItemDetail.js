import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../ItemCount/ItemCount.js';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
    return (
        <Card className="text-center">
            <Card.Header>{product.marca}</Card.Header>
            <Card.Body>
                <Card.Title>{product.modelo}</Card.Title>
                <Card.Img className='card_img container-fluid' src={product.pictureUrl} />
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Agregar al Carrito</Button>
                <Counter stock={product.stock}/>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
}
export default ItemDetail;