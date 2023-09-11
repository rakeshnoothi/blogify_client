import { Outlet } from "react-router-dom";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import BlogsDataContextProvider from "./context/BlogsDataContextProvider";

const App = () => {
    return (
        <div className="space-y-4">
            <AuthContextProvider>
                <Header />
                <main className="space-y-4 px-2 lg:px-8">
                    <BlogsDataContextProvider>
                        <Outlet />
                    </BlogsDataContextProvider>
                </main>
                <Footer />
            </AuthContextProvider>
        </div>
    );
};

export default App;
