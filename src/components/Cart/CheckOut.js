import { Button, Modal, Alert, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CheckOut.css';
import { useContext, useState } from 'react';
import { useCartContext } from "../../context/CartContext";
import { createOrder } from "../../utils/orders";
import { UserContext } from "../../context/UserContext";
import Login from '../UserInfo/Session/Login.js';


const CheckOut = ({ showModal, onClose }) => {

    const { userState } = useContext(UserContext);

    const { cart, clear, total } = useCartContext();
    
    const [orderId, setOrderId] = useState();

    const handleBuy = async () => {
        const newOrder = {
            buyer: userState,
            items: cart,
            total
        }
        console.log(newOrder);
        const newOrderId = await createOrder(newOrder);
        setOrderId(newOrderId);
        clear();
    }    

    return (
        <div>
            <Modal show={showModal} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar comprar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {userState ? (
                        <Container>
                            <Card className="order__card">
                            <Card.Title>Nombre: {userState.name}</Card.Title>
                            <Card.Text>Email: {userState.email}</Card.Text>
                            <Card.Text>Telefono: {userState.phone}</Card.Text>
                            {orderId ? (
                                <Alert key='success' variant='success'>
                                Numero de orden: <b>{orderId}</b>
                                </Alert>
                            ) : (
                                <Button variant='success' onClick={ handleBuy } className="order__btn">
                                Generar Orden
                                </Button>
                            )}
                            </Card>
                        </Container>) : ( <Login /> )}
                </Modal.Body>
                <Modal.Footer>
                    {!orderId && (
                    <>
                        <Button variant="danger" onClick={onClose}>
                            Cancelar
                        </Button>
                    </>
                    )}
                    {orderId && 
                    (<div className='modal_footer--success'>
                        <Link to='/'>
                        <Button variant="outline-info">
                            Volver a la Tienda.
                        </Button>
                        </Link>
                    </div>)}
                </Modal.Footer>
            </Modal>
        </div>
    );
}
 
export default CheckOut;