import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css';
import '../CartWidget/CartWidget.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <Container className='navabar_container'>
                    <Navbar.Brand as={Link}to='/' className='brand' size='lg'>
                        Padel Market
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link}to='/'>Home</Nav.Link>
                        <Nav.Link as={Link}to="/category/Palas">Palas</Nav.Link>
                        <Nav.Link as={Link}to="/category/Zapatillas">Zapatillas</Nav.Link>
                        <Nav.Link as={Link}to="/category/Bolsos">Bolsos</Nav.Link>
                        <Nav.Link as={Link}to="/Register">Log In / Sign In</Nav.Link>
                    </Nav>
                    <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;