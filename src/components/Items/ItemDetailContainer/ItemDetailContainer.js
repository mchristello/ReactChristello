// Components
import ItemDetail from "../ItemDetail/ItemDetail";
// Frameworks
import { Container } from "react-bootstrap";
// React
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getProduct } from "../../../utils/products";
// CSS
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct(id)
            .then((product) => setProduct(product))
            .catch((error) => console.log(error))
    }, [id]);

    return ( 
        <Container>
            <ItemDetail product={product} />
        </Container>
    );
}


export default ItemDetailContainer;