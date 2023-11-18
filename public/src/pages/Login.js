import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Badge from 'react-bootstrap/Badge'
import * as constants from '../Common'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                sessionStorage.setItem(constants.USER, JSON.stringify(userCredential.user));
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage, error)
            });

    }

    return (
        <Container>
            <Row className='pt-5 justify-content-md-center'>
                <Col md={6}>
                    <h1>React + Firebase</h1>
                    <h2>Sign in</h2>
                    <Form className='pt-3'>
                        <Form.Group className="mb-3" controlId="email">
                            <FloatingLabel
                                controlId="email"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" autoComplete='off' value={email} required onChange={(e) => setEmail(e.target.value)} />
                            </FloatingLabel>

                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <FloatingLabel
                                controlId="password"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control type="password" placeholder="Password" autoComplete='off' value={password} required onChange={(e) => setPassword(e.target.value)} />
                            </FloatingLabel>
                        </Form.Group>

                        <p className="text-sm text-center text-secondary">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                <Badge bg="info">Sign up</Badge>
                            </NavLink>
                        </p>
                        <Button variant="primary" type="submit" className="mt-3" onClick={onLogin}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login