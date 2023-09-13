import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const ProtectedRoute = ({ element }) => {
    const { user } = useAuthContext();
    console.log(user);
    if (user) {
        return element;
    }
    return <Navigate to="/" />;
};
export default ProtectedRoute;
