import { Button, Modal, Form, Alert } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import './CheckOut.css';
import { useState } from 'react';

const CheckOut = ({ showModal, onClose, onBuy, orderId }) => {

    // const [user, setUser] = useState({
    //     name: '',
    //     email: '',
    //     phone: ''
    // })

    // const handleChange = (field, value) => {
    //     setUser({
    //         ...user, 
    //         [field]: value
    //     });
    //     console.log({user});
    // }

    // const isDisable = user.email === [field].confirmEmail;
    

    return (
        <div>
            <Modal show={showModal} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar comprar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Telefono"
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="mail" 
                                    placeholder="Ingresa tu Email" 
                                    required
                                    />
                            </Form.Group>
                            <Form.Group as={Col} md="12">
                                <Form.Label>Confirmar Email.</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Vuelva a ingresar su Email" 
                                    equired
                                    />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {!orderId && (
                    <>
                        <Button variant="success" onClick={onBuy}>
                            Comprar
                        </Button>
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