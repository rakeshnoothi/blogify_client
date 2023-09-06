import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Header = () => {
    const { isAuthorized, setIsAuthorized } = useAuthContext();
    const navigate = useNavigate();

    const validateComponent = element => {
        //If user is authorized show write and profile tabs on the heade.
        console.log("from validate componetn", isAuthorized);
        if (isAuthorized) return element;
        return false;
    };
    const handleAuthorization = innerText => {
        console.log(innerText);
        if (innerText === "Login") return navigate("/login");
        setIsAuthorized(false);
        return navigate("/");
    };
    return (
        <header className="p-4">
            <div className=" flex justify-between">
                <Link to="/" className="font=bold text-lg">
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
                    <button
                        onClick={e => handleAuthorization(e.target.innerText)}
                    >
                        {isAuthorized ? "Logout" : "Login"}
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;
