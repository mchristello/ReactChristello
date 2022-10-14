import { AiOutlineShoppingCart } from 'react-icons/ai';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { Badge, Card, CardImg, Container } from 'react-bootstrap';
import { IoTrashOutline } from 'react-icons/io5';
import Cart from '../Cart/Cart';
import { useCartContext } from '../../context/CartContext';


const CartWidget = () => {

    const [show, setShow] = useState(false);
    const { cart, totalCant, removeItem, total } = useCartContext()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (id) => {
        removeItem(id);
    }


    return ( 
        <section>
            <Button variant='dark' size='lg' onClick={handleShow}>
                <AiOutlineShoppingCart />
                {totalCant > 0 && (
                    <Badge pill bg="success">{totalCant}</Badge>
                )}
            </Button>
                <Modal className="text-center modal" border="secondary" show={show} onHide={handleClose}>
                    <Modal.Header closeButton >
                        <Modal.Title>Carrito de Compras</Modal.Title>
                    </Modal.Header>
                    <Modal.Body > 
                        <Container className="border-top cart-widget__container">
                            {cart.map((product) => {
                                return (
                                    <Card key={product.id} style={{ width: '10rem' }}>
                                        <Card.Body>
                                            <Card.Title>Marca {product.marca}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{product.modelo}</Card.Subtitle>
                                            <Card.Img className='card_img container-fluid' variant="top" src={product.pictureUrl} /> 
                                            <Card.Text>
                                                <p>Cantidad: {product.quantity}</p>
                                                <p>Precio unidad: ${product.price}</p>
                                            </Card.Text>
                                            <Button variant="danger" onClick={()=> handleClick(product.id)}>
                                                    <IoTrashOutline />
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        {cart.length > 0 && (
                            <p>Total de: ${total}</p>
                        )}
                        <div>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose} as={Link}to='./cart' element={<Cart />}>
                                Ir al Carrito
                            </Button>
                        </div>
                    </Modal.Footer>
                </Modal>
        </section>
    );
}

export default CartWidget;