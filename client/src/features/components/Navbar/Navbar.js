import React from "react";
import { useNavigate } from "react-router-dom";
import { loggedIn, setIsLoggedIn } from "../../../app/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap"; // Import the Button component from React Bootstrap
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(loggedIn);
    const dispatch = useDispatch();

    const logOut = () => {
        if (isLoggedIn) {
            dispatch(setIsLoggedIn(false));
            navigate("/login");
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="nav-container">
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    {/* Use the Button component from React Bootstrap */}
                    <Button onClick={logOut} className="login-button">
                        {isLoggedIn ? "logout" : "login"}
                    </Button>
                </form>
            </nav>
        </div>
    );
};

export default Navbar;

