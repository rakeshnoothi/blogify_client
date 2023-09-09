import { useNavigate, Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { useState } from "react";

const Login = () => {
    const { isAuthorized, loginUser } = useAuthContext();
    const [userLoginInfo, setuserLoginInfo] = useState({
        userName: "",
        password: "",
    });
    const navigate = useNavigate();

    if (isAuthorized) return navigate("/");

    return (
        <div className="h-[80vh] flex justify-center items-center">
            <div className="w-2/3 flex flex-col justify-center items-center mx-auto p-4 space-y-4 max-w-[416px]">
                <span className="text-orange-500 text-xl font-bold">
                    Blogify
                </span>
                <form action="" className="flex flex-col w-full space-y-4">
                    <input
                        type="text"
                        placeholder="username or e-mail"
                        className="grow h-11 p-2 border"
                        value={userLoginInfo.userName}
                        onChange={e => {
                            setuserLoginInfo({
                                ...userLoginInfo,
                                userName: e.target.value,
                            });
                        }}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="grow h-11 p-2 border"
                        value={userLoginInfo.password}
                        onChange={e => {
                            setuserLoginInfo({
                                ...userLoginInfo,
                                password: e.target.value,
                            });
                        }}
                    />
                    <button
                        className="bg-orange-500 p-2 text-white"
                        onClick={e => loginUser(e, userLoginInfo)}
                    >
                        Login
                    </button>
                </form>
                <p>
                    Dont have an Account?{" "}
                    <Link to="/register" className="text-orange-500">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default Login;
