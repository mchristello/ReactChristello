import { Button, Modal, Form, Alert } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import './OrderModal.css';
import { useState } from 'react';

const OrderModal = ({ showModal, onClose, onBuy, orderId }) => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    
        setValidated(true);
    };

    return (
        <div>
            <Modal show={showModal} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar comprar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Telefono"
                            />
                            <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="mail" placeholder="Ingresa tu Email" required />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingrese un email válido.
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom04">
                            <Form.Label>Confirmar Email.</Form.Label>
                            <Form.Control type="text" placeholder="Vuelva a ingresar su Email" required />
                            <Form.Control.Feedback type="invalid">
                                Vuelva a ingresar su mail
                            </Form.Control.Feedback>
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
 
export default OrderModal;