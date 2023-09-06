import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const contextValue = {
        isAuthorized,
        setIsAuthorized,
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider;
