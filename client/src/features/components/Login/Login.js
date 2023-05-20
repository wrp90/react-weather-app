import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Login.css'
import { setIsLoggedIn } from '../../../app/searchSlice';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        userName: "",
        password: "",
    });
    console.log(user)
    const [isLoggingIn, setIsLoggingIn] = useState(true);
    const [ message, setMessage] = useState(null)
    const submitLogin = async () => {
        const url = isLoggingIn? 'http://localhost:3001/login':'http://localhost:3001/users'
        const newUser = await fetch(url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await newUser.json();
        if (data.message) {
           return setMessage(data.message);
        }
        console.log(data);
        dispatch(setIsLoggedIn(true));
        navigate('/dashboard');
    };

    return (
        <div className="login-form">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required onChange={(event) => setUser({ ...user, userName: event.target.value })} />
            {!isLoggingIn && <>
                <label><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required onChange={(event) => setUser({ ...user, email: event.target.value })} />
            </>}
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required onChange={(event) => setUser({ ...user, password: event.target.value })} />
            <button type="submit" onClick={submitLogin}>{isLoggingIn ? "Login" : "Register"}</button>
            <a onClick={() => setIsLoggingIn(!isLoggingIn)}>{isLoggingIn ? "Register" : "Login"}</a>
            {message && <p>{message}</p>}
        </div>
    )
};

export default Login;