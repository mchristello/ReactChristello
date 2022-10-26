import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { VscAccount } from 'react-icons/vsc';
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.js';
import CartWidget from '../Cart/CartWidget/CartWidget.js';
import './NavBar.css';



const NavBar = () => {

    const { userState, logOut } = useContext(UserContext);


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand as={Link}to='/' className='brand ml-auto' size='lg'>
                        Padel Market
                    </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Container className='navbar_container'>
                                <Nav>
                                    <Nav.Link as={Link}to='/'>Home</Nav.Link>
                                    <Nav.Link as={Link}to="/category/Palas">Palas</Nav.Link>
                                    <Nav.Link as={Link}to="/category/Zapatillas">Zapatillas</Nav.Link>
                                    <Nav.Link as={Link}to="/category/Bolsos">Bolsos</Nav.Link>                        
                                    {!userState ? (
                                        <div className='account_menu'>
                                            <Nav.Link as={Link}to="/logIn">Iniciar Sesión | <FiLogIn /></Nav.Link> 
                                            <Nav.Link as={Link}to="/newUser">Crear Cuenta |</Nav.Link>
                                        </div> 
                                    ) : (
                                        <div className='account_menu'>
                                            <Nav.Link as={Link}to="/userAccount">Mi Cuenta | <VscAccount /></Nav.Link>
                                            <Button variant='dark' onClick={ logOut }>LogOut | <FiLogOut /></Button>
                                        </div>
                                    )}
                                </Nav>
                            </Container>
                            </Navbar.Collapse>
                    <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;