import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './ItemSearch.css';


const ItemSerch = () => {

    
    return ( 
        <div className="ItemSearch">
            <InputGroup className="mb-3">
                <Form.Control
                        placeholder="Busca por MARCA"
                        aria-label="Busca por MARCA"
                        aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Buscar
                </Button>
            </InputGroup>
        </div>
    );
}
export default ItemSerch;