import { Outlet } from "react-router-dom";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import AuthContextProvider from "./context/AuthContextProvider.jsx";

const App = () => {
    console.log("rendered from app");
    return (
        <div className="px-4">
            <AuthContextProvider>
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </AuthContextProvider>
        </div>
    );
};

export default App;
