import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const ProtectedRoute = ({ element }) => {
    const { isAuthorized } = useAuthContext();
    console.log(isAuthorized);
    if (isAuthorized) {
        return element;
    }
    return <Navigate to="/" />;
};
export default ProtectedRoute;
