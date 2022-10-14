import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {
    // Funciones del CartContext

    const [counter, setCounter] = useState(1);

    const handleClick = () => onAdd(counter);

    const handleClickUp = () => {
        if(counter < stock) {
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
                    <span style={{color:"black"}}> { counter } </span>
                    <Button onClick={handleClickUp} variant="success"> + </Button>
                </section>
                <Button variant="outline-info" onClick={handleClick} >Agregar al Carrito</Button>
            </Container>
    );
};

export default ItemCount;


// const [loQueModifico, ComoVaAEstar] = useState(ValorInicial)