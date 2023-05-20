import { useNavigate } from "react-router-dom";
import { loggedIn, setIsLoggedIn } from "../../../app/searchSlice";
import { useDispatch, useSelector } from "react-redux";



const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(loggedIn);
    const dispatch = useDispatch();

    const logOut = () => {
        if (isLoggedIn) {
            dispatch(setIsLoggedIn(false));
            navigate('/');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="nav-container">
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <button onClick={logOut} className="btn btn-outline-success" type="button">{isLoggedIn? "logout": "login"}</button>
                    {/* <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button> */}
                </form>
            </nav>
        </div>
    );
};

export default Navbar;