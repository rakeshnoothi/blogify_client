import { Outlet } from "react-router-dom";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import AuthContextProvider from "./context/AuthContextProvider.jsx";

const App = () => {
    console.log("rendered from app");
    return (
        <div className="space-y-4 px-2 lg:px-8">
            <AuthContextProvider>
                <Header />
                <Outlet />
                <Footer />
            </AuthContextProvider>
        </div>
    );
};

export default App;
