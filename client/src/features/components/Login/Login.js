import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'; // Import React Bootstrap components
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Login.css';
import { setIsLoggedIn } from '../../../app/searchSlice';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        userName: '',
        password: '',
    });

    const [isLoggingIn, setIsLoggingIn] = useState(true);
    const [message, setMessage] = useState(null);

    const submitLogin = async () => {
        const url = isLoggingIn ? `${baseUrl}/login` : `${baseUrl}/users`;
        const newUser = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await newUser.json();
        if (data.message) {
            return setMessage(data.message);
        }
        console.log(data);
        dispatch(setIsLoggedIn(true));
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1 className="title">Log In</h1>
                <Form>
                    {!isLoggingIn && (
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={(event) =>
                                    setUser({ ...user, email: event.target.value })
                                }
                            />
                        </Form.Group>
                    )}

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            onChange={(event) =>
                                setUser({ ...user, userName: event.target.value })
                            }
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            onChange={(event) =>
                                setUser({ ...user, password: event.target.value })
                            }
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="button"
                        onClick={submitLogin}
                    >
                        {isLoggingIn ? 'Login' : 'Register'}
                    </Button>
                    <Button
                        variant="secondary"
                        type="button"
                        onClick={() => setIsLoggingIn(!isLoggingIn)}
                    >
                        {isLoggingIn ? 'Register' : 'Login'}
                    </Button>
                    {message && <Alert variant="danger">{message}</Alert>}
                </Form>
            </div>
        </div>
    );
};

export default Login;
