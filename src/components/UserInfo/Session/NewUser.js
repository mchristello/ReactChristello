// Components
import { UserDetail } from "../UserDetail";
// Frameworks
import { Form, Button, Col, Row, Container } from "react-bootstrap";
// React
import { useContext } from "react";
import { UserForm } from '../../UserInfo/Form.js';
import { UserContext } from "../../../context/UserContext";
// CSS
import "./NewUser.css";


function NewUser() {
    const { userState, registerUser } = useContext(UserContext);

    const { form, handleChange } = UserForm({
        name: "",
        email: "",
        password: "",
        confirmPass: "",
        phone: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmPass } = form;
        if (password === confirmPass) {
            registerUser(form);
        } else {
            alert("Revisá tu contraseña");
        }
    };

    return (
        <>
        {userState ? (
            <UserDetail />
        ) : (
            <Container className="new_user">
            <h2>Crea tu cuenta.</h2>
            <Form className="new_user__form" onSubmit={handleSubmit}>
                <h3>Nuevo Ususario</h3>
                <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={handleChange}
                    />
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="********"
                    name="password"
                    onChange={handleChange}
                    />
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="********"
                    name="confirmPass"
                    onChange={handleChange}
                    />
                </Form.Group>
                </Row>

                <Row className="mb-3">
                <Form.Group className="mb-3" as={Col}>
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control
                    placeholder="Calle Falsa 123"
                    name="adress"
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" as={Col}>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                    name="phone"
                    placeholder='XXX-XXXXXXX'
                    onChange={handleChange}
                    />
                </Form.Group>
                </Row>

                <Button type="submit" variant='info'>
                Registrarse
                </Button>
            </Form>
            </Container>
        )}
        </>
    );
}

export default NewUser;
