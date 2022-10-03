import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Counter from '../ItemCount/ItemCount.js';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
    return (
        <Card className="text-center item_detail__card">
            <Card.Header className='item_detail__header'>{product.marca}</Card.Header>
            <Card.Title className='item_detail__title'>{product.modelo}</Card.Title>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Img className='container-fluid' src={product.pictureUrl} />
                    </Col>
                    <Col fluid>
                        <Card.Text className='container-fluid item_detail__body'>
                            {product.description}
                            <Counter stock={product.stock}/>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
}
export default ItemDetail;