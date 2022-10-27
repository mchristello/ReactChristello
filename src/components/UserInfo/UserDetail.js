// Frameworks
import { Card, Button, Table, Container, CardGroup } from "react-bootstrap";
import { getAllOrders } from "../../utils/Firebase/firestore";
// React
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
// CSS
import "./UserDetail.css";

export const UserDetail = () => {
    const { userState, logOut } = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const { email } = userState;
        getAllOrders().then((snapshot) => {
            const allOrders = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setOrders(allOrders.filter(order => order.buyer.email.includes(email)))
        });
    }, [userState]);

    return (
        <Container as='div' className="user_detail mt-5">
            <h1>Mi Cuenta</h1>
        <Card className="user_detail__card">
            <Card.Header as="h2">
            Hola <b>{userState.name} {userState.displayName}</b>!
            </Card.Header>
            <Card.Body>
            <Card.Title as="h3">Mis Compras</Card.Title>
            <CardGroup >
                {(orders.length > 0) ? (
                orders.map((order) => {
                    return (
                        <Table striped bordered hover responsive key={order.id} className='table' >
                            <thead>
                                <tr>
                                    <th><u>Número de orden:</u> {order.id}</th>
                                    <th><u>Nombre:</u> {order.buyer.name}</th>
                                    <th><u>Email:</u> {order.buyer.email}</th>
                                    <th><u>Telefono:</u> {order.buyer.phoneNumber}</th>
                                    <th><u>Total de la Compra:</u> ${order.total} </th>
                                </tr>
                            </thead>
                            <tbody>
                            {order.items.map((product) => {
                                return (
                                <tr key={product.id}>
                                    <td>Datos del producto</td>
                                    <td>{product.category}</td>
                                    <td>{product.marca} {product.modelo}</td>
                                    <td>Unidades: {product.quantity}</td>
                                    <td>Precio unitario ${product.price}</td>
                                </tr>
                                );
                            })}
                            </tbody>
                        </Table>
                    );
                })
                ) : (
                <Container>
                    <h5 className="mt-4">Todavía no has hecho ninguna compra</h5>
                    <Link to='/'>
                        <Button variant="info" className="mt-4">
                            Volver a la Tienda.
                        </Button>
                    </Link>
                </Container>
                )}
            </CardGroup>
            <Link to={"/"}>
                <Button variant='outline-danger' className="mt-4" onClick={ logOut } >
                Logout
                </Button>
            </Link>
            </Card.Body>
        </Card>
        </Container>
    );
};
