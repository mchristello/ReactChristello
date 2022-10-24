import { Button, Modal, Form, Alert } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import './CheckOut.css';
import { useState } from 'react';
import { useCartContext } from "../../context/CartContext";
import { createOrder } from "../../utils/orders";

const CheckOut = ({ showModal, onClose }) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmed: ''
    })

    const { cart, clear, total } = useCartContext();

    const [orderId, setOrderId] = useState();

    const handleBuy = async () => {
        const newOrder = {
            buyer: user,
            items: cart,
            total
        }
        const newOrderId = await createOrder(newOrder);
        setOrderId(newOrderId);
        clear();
    }


    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    const isDisable = user.name === '' || user.email !== user.emailConfirmed || user.phone === '';
    

    return (
        <div>
            <Modal show={showModal} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar comprar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <h5>Complete todos los datos para confirmar la orden</h5>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    name="name"
                                    onChange={ handleChange }
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="xxx-xxxxxxx"
                                    name="phone"
                                    onChange={ handleChange }
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="mail" 
                                    placeholder="Ingresa tu Email" 
                                    name="email"
                                    onChange={ handleChange }
                                    />
                            </Form.Group>
                            <Form.Group as={Col} md="12">
                                <Form.Label>Confirmar Email.</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Vuelva a ingresar su Email" 
                                    name="emailConfirmed"
                                    onChange={ handleChange }
                                    />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {!orderId && (
                    <>
                        { !isDisable && <Button variant="success" onClick={ handleBuy }>
                            Comprar
                        </Button> }
                        <Button variant="danger" onClick={onClose}>
                            Cancelar
                        </Button>
                    </>
                    )}
                    {orderId && 
                    (<div className='modal_footer--success'>
                        <Alert key='success' variant='success'>
                            Numero de orden: <b>{orderId}</b>
                        </Alert>
                        <Link to='/'>
                        <Button variant="outline-info">
                            Comprar nuevamente
                        </Button>
                        </Link>
                    </div>)}
                </Modal.Footer>
            </Modal>
        </div>
    );
}
 
export default CheckOut;