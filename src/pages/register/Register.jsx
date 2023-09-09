import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const generateInputObj = (type, placeholder, id) => {
    return {
        type: type,
        placeholder: placeholder,
        value: "",
        id: id,
    };
};

const firstName = generateInputObj("text", "First Name", "firstName");
const lastName = generateInputObj("text", "Last Name", "lastName");
const userName = generateInputObj("text", "user Nmae", "username");
const email = generateInputObj("email", "E-mail Address", "email");
const password = generateInputObj("password", "New Password", "pass");
const confirmPassword = generateInputObj(
    "password",
    "confirm Password",
    "confPass"
);

const inputArr = [
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword,
];

const Register = () => {
    const [userRegisterInfo, setUserRegisterInfo] = useState(inputArr);
    const { registerNewUser } = useAuthContext();

    //Formatted regesteration Data.
    const registerationData = {
        first_name: userRegisterInfo[0].value,
        last_name: userRegisterInfo[1].value,
        username: userRegisterInfo[2].value,
        email: userRegisterInfo[3].value,
        password: userRegisterInfo[4].value,
        confirmPassword: userRegisterInfo[5].value,
    };

    //Update the value of input that is changing.
    const updateUserRegisterInfo = e => {
        const updatedRegisterInfoArr = userRegisterInfo.map(el => {
            if (e.target.id === el.id) {
                el.value = e.target.value;
            }
            return el;
        });
        setUserRegisterInfo(updatedRegisterInfoArr);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-2/3 p-4 max-w-[416px] flex flex-col space-y-8 items-center">
                <span className="font-bold text-xl text-orange-500">
                    Blogify
                </span>
                <form
                    action=""
                    className="flex flex-col space-y-4 items-center w-full"
                >
                    <span className="font-bold">Create Account</span>
                    {userRegisterInfo.map(userInfoEl => {
                        return (
                            <input
                                type={userInfoEl.type}
                                placeholder={userInfoEl.placeholder}
                                key={userInfoEl.id}
                                value={userInfoEl.value}
                                className="h-11 p-2 w-full border"
                                id={userInfoEl.id}
                                onChange={e => updateUserRegisterInfo(e)}
                            />
                        );
                    })}
                    <button
                        className="w-full p-4 bg-orange-500 text-white"
                        onClick={e =>
                            registerNewUser(e, registerationData).then(() => {
                                setUserRegisterInfo(inputArr);
                            })
                        }
                    >
                        Create Account
                    </button>
                </form>
                <p>
                    Already have an account{" "}
                    <Link to="/login" className="text-orange-500">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default Register;
