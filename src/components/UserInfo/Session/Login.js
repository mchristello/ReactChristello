import { Form, Button, Container } from "react-bootstrap";
import { UserForm } from '../../UserInfo/Form.js';
import { Link } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { UserDetail } from "../UserDetail";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { LoginWithGoogle } from "../../../utils/Firebase/firebase.js";


function Login() {
    const { userState, signIn } = useContext(UserContext);
    const { form, handleChange } = UserForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(form);
    };

    const handleClick = (e) => {
        LoginWithGoogle();
    }

    return (
        <>
        {userState ? (
            <UserDetail />
        ) : (
            <Container className="login">
                <h2>Login</h2>
                <Form className="login__form" onSubmit={ handleSubmit }>
                    <h3>Iniciar Sesión</h3>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        name="email"
                        placeholder='user@mail.com'
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={handleChange}
                        name="password"
                        placeholder="********"
                    />
                    </Form.Group>
                    <Form.Group className="login__btn">
                        <Button variant='success' type="submit" className="login__btn" >
                            Login
                        </Button>
                        <Button variant='info' type="button" className="login__btn btn-block" onClick={ handleClick }>
                            Login with Google
                        </Button>
                        <Button variant='secondary' as={Link}to={"/NewUser"} >Crear cuenta.</Button>
                    </Form.Group>
                </Form>
            </Container>
        )}
        </>
    );
}

export default Login;
