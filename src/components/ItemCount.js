import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './ItemCount.css';

const Counter = ({ stock }) => {
    const [counter, setCount] = useState(0);

    const countUp = () => {
        if(counter < stock) {
            setCount(counter + 1);
        }
    };
    const countDown = () => {
        if(counter > 0 && counter <= stock) {
            setCount(counter - 1);
        }
    }

    return (
        <Container className='counter_container'>
            <h6>El Stock disponible es de: { stock } unidades.</h6>
            <section className='counter'>
                <Button onClick={countDown} variant="danger"> - </Button>
                <h4 style={{color:"black"}}> {counter} </h4>
                <Button onClick={countUp} variant="success"> + </Button>
            </section>
        </Container>
    );
};

export default Counter;


// const [loQueModifico, ComoVaAEstar] = useState(ValorInicial)