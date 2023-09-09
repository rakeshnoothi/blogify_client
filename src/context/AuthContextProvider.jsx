import { createContext, useState } from "react";
import localStorageMethods from "../utils/localStorageMethods";
import axiosInstance from "../utils/api/axiosInstance";
import { useNavigate } from "react-router-dom";
import validateRegisterationForm from "../utils/formValidation";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    const loginUser = async (e, userLoginInfo) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/auth/local", {
                identifier: userLoginInfo.userName,
                password: userLoginInfo.password,
            });
            localStorageMethods.setJwt(response.data.jwt);
            setUserInfo(response.data.user);
            setIsAuthorized(true);
            navigate("/");
        } catch (error) {
            console.log("from catch", error);
        }
    };

    const logoutUser = () => {
        localStorageMethods.clearJwt();
        setUserInfo(null);
        setIsAuthorized(false);
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
            setUserInfo(response.data.user);
            setIsAuthorized(true);
            navigate("/");
            return;
        } catch (error) {
            console.log("from catch", error);
        }
    };

    const contextValue = {
        isAuthorized,
        setIsAuthorized,
        userInfo,
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
