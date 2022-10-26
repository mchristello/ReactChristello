import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Card, Button, Table, Container, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserDetail.css";
import { getAllOrders } from "../../utils/Firebase/firestore";

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
        <Container className="user_detail mt-5">
        <Card className="user_detail__card">
            <Card.Header as="h2">
            Hola <b>{userState.name}</b>!
            </Card.Header>
            <Card.Body>
            <Card.Title as="h4">Mis Compras</Card.Title>
            <CardGroup >
                {(orders.length > 0) ? (
                orders.map((order) => {
                    return (
                    <Table striped bordered hover key={order.id} className='table' >
                        <thead>
                        <tr>
                            <th>Número de orden: {order.id}</th>
                            <th>Nombre: {order.buyer.name}</th>
                            <th>Email: {order.buyer.email}</th>
                            <th>Telefono: {order.buyer.phone}</th>
                            <th> Total de la Compra: ${order.total} </th>
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
                    <h4>Todavía no has hecho ninguna compra</h4>
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
                Desconectarse
                </Button>
            </Link>
            </Card.Body>
        </Card>
        </Container>
    );
};
