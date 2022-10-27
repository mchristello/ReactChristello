// Frameworks
import { Button, Container } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
// React
import React, { useState } from 'react';
// CSS
import './ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {

    const [counter, setCounter] = useState(1);

    const handleClick = () => onAdd(counter);

    const handleClickUp = () => {
        if(counter < stock) { // No permite agregar más unidades que el stock disponible
            setCounter(counter + 1);
        }
    };
    const handleClickDown = () => {
        if(counter > 1 && counter <= stock) {
            setCounter(counter - 1);
        }
    }

    return (
            <Container className='counter_container'>
                <section className='counter'>
                    <Button onClick={handleClickDown} variant="danger"> - </Button>
                    <span> { counter } </span>
                    <Button onClick={handleClickUp} variant="success"> + </Button>
                </section>
                <Button variant="info" onClick={handleClick} >Agregar al Carrito <AiOutlineShoppingCart /></Button>
            </Container>
    );
};

export default ItemCount;
