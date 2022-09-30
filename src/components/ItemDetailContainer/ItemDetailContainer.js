import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const { id } = useParams();

    return ( 
        <Container>
            <h1>Detalle del Producto</h1>
        </Container>
    );
}


export default ItemDetailContainer;