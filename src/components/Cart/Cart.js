import { Button, Card, Container, Table } from "react-bootstrap";
import { IoTrashOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import './Cart.css';



const Cart = () => {

    const { cart, removeItem, clear, total } = useCartContext();

    const handleClick = (id) => {
        removeItem(id);
    }

    const showCartTable = cart.length > 0;

    return ( 
        <Container className="cart">
            <h1>Acá se muestra el Carrito de Compras</h1>
            {/* <Container className="cart_container">
                {cart.map((product) => {
                    return (
                        <Card key={ product.id } className='card_items'>
                            <Card.Img className='card_img container-fluid' variant="top" src={product.pictureUrl} />
                            <Card.Body>
                                <Card.Title><h2>{product.marca}</h2></Card.Title>
                                <Card.Subtitle className="mb-3 text-muted"><h3>{product.modelo}</h3></Card.Subtitle>
                                <Card.Text>
                                    <h5><u>Año:</u> {product.anio}</h5>
                                    <h5><b><u>Precio:</u> ${product.price}</b></h5>
                                    <h6>Cantidad: {product.quantity}</h6>
                                </Card.Text>
                                <Card.Footer>
                                    <Button onClick={()=> removeItem(product)} > Eliminar </Button>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    )
                    // (carrito.length > 1 ? (<Button variant="danger" onClick={()=> clear()} > Vaciar Carrito </Button>) : (<h3>Su Carrito está vacío.</h3>))
                })}
            </Container>
            <h2> El total de su compra es de: ${ total } </h2> */}
                {showCartTable && 
                    (
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {cart.map((product) => {
                                        return (
                                            <tr key={ product.id }>
                                                <td>{product.marca} {product.modelo}</td>
                                                <td>${product.price}</td>
                                                <td>{product.quantity}</td>
                                                <td> 
                                                    <Button variant="outline-danger" onClick={()=> handleClick(product.id)}>
                                                        <IoTrashOutline />
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </Table>
                        <h3>El total de la compra es de: ${total}</h3>
                    </div>
                    )
                }
                {!showCartTable && (<div>
                        <h2>No hay productos en el Carrito</h2>
                        <Link to='/'>
                            <Button variant="info">Volver a Home</Button>
                        </Link>
                    </div>)}
            </Container>
    )
}
export default Cart;