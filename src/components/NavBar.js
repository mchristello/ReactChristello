import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './NavBar.css';
import './CartWidget.css';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='brand' size='lg'>Padel Market</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#palas">Palas</Nav.Link>
                        <Nav.Link href="#zapatilals">Zapatillas</Nav.Link>
                        <Nav.Link href="#bolsos">Bolsos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;