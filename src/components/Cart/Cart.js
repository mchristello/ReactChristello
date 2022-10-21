import { Button, Container, Table } from "react-bootstrap";
import { IoTrashOutline } from 'react-icons/io5';
import { FcInfo, FcCancel, FcPaid } from 'react-icons/fc';
import { TiArrowBack } from 'react-icons/ti';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import './Cart.css';
import { useState } from "react";
import { createOrder } from "../../utils/orders";
import CheckOut from "./CheckOut";


const buyerMock = {
    name: 'Arya Stark',
    phone: '00115546992', 
    email: 'arya@perrita.com'
}



const Cart = () => {

    const { cart, removeItem, clear, total } = useCartContext();
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const [orderId, setOrderId] = useState();
    const [showModal, setShowModal] = useState(false)

    const handleRemove = (id) => {
        removeItem(id);
    }

    const handleBuy = async () => {
        const newOrder = {
            buyer: buyerMock,
            items: cart,
            total
        }
        const newOrderId = await createOrder(newOrder);
        setOrderId(newOrderId);
        console.log(orderId);
        clear();
    }

    const handleOpen = () => { setShowModal(true) };

    const handleClose = () => { setShowModal(false) };

    const showCartTable = cart.length > 0;

    return ( 
        <Container className="cart">
            <h1 className="cart__title">Tu carrito de compras.</h1>
                {showCartTable && 
                    (
                    <div className="cart__table">
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
                    <CheckOut showModal={showModal} onClose={handleClose} onBuy={handleBuy} orderId={orderId}/>
            </Container>
    )
}
export default Cart;