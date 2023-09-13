import { createContext, useEffect, useState } from "react";
import localStorageMethods from "../utils/localStorageMethods";
import axiosInstance from "../utils/api/axiosInstance";
import { useNavigate } from "react-router-dom";
import validateRegisterationForm from "../utils/formValidation";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    const loginUser = async (e, userLoginInfo) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/auth/local", {
                identifier: userLoginInfo.userName,
                password: userLoginInfo.password,
            });
            localStorageMethods.setUser(JSON.stringify(response.data));
            setUser(response.data);
            navigate("/");
        } catch (error) {
            console.log("from catch", error);
        }
    };

    const logoutUser = () => {
        localStorageMethods.clearUser();
        setUser("");
        return navigate("/");
    };

    const registerNewUser = async (e, registerationData) => {
        e.preventDefault();
        //Validate the form before making a request to the server.
        const isFormValid = validateRegisterationForm(registerationData);
        if (!isFormValid) {
            console.log("form is invalid");
            return;
        }
        //If passes the form validation checks below code runs.
        try {
            const response = await axiosInstance.post("/auth/local/register", {
                first_name: registerationData.first_name,
                last_name: registerationData.last_name,
                username: registerationData.username,
                email: registerationData.email,
                password: registerationData.password,
            });
            localStorageMethods.setJwt(response.data.jwt);
            setUser(response.data);
            navigate("/");
            return;
        } catch (error) {
            console.log("from catch", error);
        }
    };

    useEffect(() => {
        const IsLoggedIn = localStorageMethods.getUser();
        if (IsLoggedIn) {
            const foundUser = JSON.parse(IsLoggedIn);
            setUser(foundUser);
        }
    }, []);

    const contextValue = {
        user,
        loginUser,
        logoutUser,
        registerNewUser,
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider;
