import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Header = () => {
    const { isAuthorized, logoutUser } = useAuthContext();
    const navigate = useNavigate();

    const validateComponent = element => {
        //If user is authorized show write and profile tabs on the header.
        if (isAuthorized) return element;
        return false;
    };

    //Handle login and logout button page redirection
    const handleAuthorization = innerText => {
        if (innerText === "Login") {
            return navigate("/login");
        }
        return logoutUser();
    };
    return (
        <header className="p-4 sticky top-0 bg-white flex justify-between z-50">
            <Link
                to="/"
                className="font=bold text-lg text-orange-600 font-bold"
            >
                BLOGIFY
            </Link>
            <div className="space-x-2">
                <NavLink to="/" className="px-2 py-1 rounded-md inactive ">
                    Home
                </NavLink>
                {validateComponent(
                    <NavLink
                        to="/write"
                        className="px-2 py-1 rounded-md inactive"
                    >
                        Write
                    </NavLink>
                )}
                {validateComponent(
                    <NavLink
                        to="/profile"
                        className="px-2 py-1 rounded-md inactive"
                    >
                        Profile
                    </NavLink>
                )}
                <button onClick={e => handleAuthorization(e.target.innerText)}>
                    {isAuthorized ? "Logout" : "Login"}
                </button>
            </div>
        </header>
    );
};
export default Header;
