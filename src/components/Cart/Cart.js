// Components
import CheckOut from "./CheckOut";
// Frameworks
import { Button, Container, Table } from "react-bootstrap";
import { IoTrashOutline } from 'react-icons/io5';
import { FcInfo, FcCancel, FcPaid } from 'react-icons/fc';
import { TiArrowBack } from 'react-icons/ti';
// React
import { useContext, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
// CSS
import './Cart.css';


const Cart = () => {

    const { cart, removeItem, clear, total } = useCartContext();
    const [showModal, setShowModal] = useState(false)
    const { userState } = useContext(UserContext);

    const handleRemove = (id) => {
        removeItem(id);
    }

    const handleOpen = () => { setShowModal(true) };

    const handleClose = () => { setShowModal(false) };

    const showCartTable = cart.length > 0;

    return ( 
        <Container className="cart">
            <h1 className="cart__title">Tu carrito de compras</h1>
                {showCartTable && 
                    (
                    <div className="cart__table">
                        { userState && (
                            <h4>Comprando como {userState.name} {userState.displayName} - {userState.email}</h4>
                        )}
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
                                                <td className="table__title">
                                                    <Link to={`/item/${product.id}`}>
                                                        <FcInfo />
                                                    </Link>
                                                        {product.marca} {product.modelo}
                                                </td>
                                                <td className="table__price">${product.price}</td>
                                                <td className="table__quantity">{product.quantity}</td>
                                                <td> 
                                                    <Button variant="outline-danger" onClick={()=> handleRemove(product.id)}>
                                                        <FcCancel />
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </Table>
                        <h3 className="cart__table--total"><u>El total de la compra es de:</u> <b>${total}</b> </h3>
                        <Container className='cart__table--btn_container'>
                            <Button className="cart__table--btn" variant="success" onClick={(handleOpen)} >Finalizar Compra <FcPaid /></Button>
                            <Button className="cart__table--btn" variant="danger" onClick={() => (clear())} >Vaciar Carrito <IoTrashOutline /></Button>
                        </Container>
                    </div>
                    )
                }
                {!showCartTable && (<div>
                        <h2>No hay productos en el Carrito</h2>
                        <Link to='/'>
                            <Button className="cart__table--btn" variant="info"><TiArrowBack />   Ir a comprar!</Button>
                        </Link>
                    </div>)}
                    <CheckOut showModal={showModal} onClose={handleClose} />
            </Container>
    )
}
export default Cart;