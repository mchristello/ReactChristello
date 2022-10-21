import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCartContext } from '../../../context/CartContext';

const ItemDetail = ({ product }) => {

    const [count, setCount] = useState(0)
    const { addItem } = useCartContext();
    const [showItemCount, setShowItemCount] = useState(true);


    const handleAdd = (itemsToCart) => {
        setCount(itemsToCart);
        setShowItemCount(false);
        addItem(product, itemsToCart);
    }
    
    return (
        <Card className="text-center item_detail__card">
            <Card.Header className='item_detail__header'>{product.marca}</Card.Header>
            <Card.Title className='item_detail__title'>{product.modelo}</Card.Title>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Img className='container-fluid' src={product.pictureUrl} />
                    </Col>
                    <Col fluid>
                        <Card.Text className='container-fluid item_detail__body'>
                            {product.description}
                        </Card.Text>
                        <Container className="flex-row">
                            {
                                showItemCount && (
                                    <ItemCount stock={ product.stock } onAdd={handleAdd} />
                                )
                            }
                            {
                                !showItemCount && (
                                    <div className='item_detail__buttons'>
                                        <Link to='/cart'>
                                            <Button 
                                        className='itemCart__button' 
                                        variant="outline-success" >Continuar al Carrito</Button>
                                        </Link> 
                                        <Link to='/'>
                                            <Button variant='outline-info'> Volver al Home </Button>    
                                        </Link>
                                    </div>
                                )
                            }
                        </Container>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted">El Stock disponible es de: { product.stock } unidades.</Card.Footer>
        </Card>
    );
}
export default ItemDetail;