import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Login = () => {
    const { isAuthorized, setIsAuthorized } = useAuthContext();
    const navigate = useNavigate();
    if (isAuthorized) return navigate("/");
    const loginUser = () => {
        setIsAuthorized(true);
        navigate("/");
    };
    return <button onClick={() => loginUser()}>Login</button>;
};
export default Login;
