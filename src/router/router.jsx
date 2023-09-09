import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

//page imports.
import Home from "../pages/home/Home";
import Read from "../pages/read/Read";
import Write from "../pages/write/Write";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/Login";
import App from "../App";
import Register from "../pages/register/Register";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/read" element={<Read />} />
            <Route
                path="/write"
                element={<ProtectedRoute element={<Write />} />}
            />
            <Route
                path="/profile"
                element={<ProtectedRoute element={<Profile />} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>
    )
);

export default router;
