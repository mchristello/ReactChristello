import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getProduct } from "../../utils/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        getProduct(id)
            .then((data) => setItem(data))
            .catch((error) => console.warn(error))
    }, [id]);

    return ( 
        <Container>
            <ItemDetail product={item} />
        </Container>
    );
}


export default ItemDetailContainer;