const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
);
const passRegex = new RegExp(/^[A-Za-z]\w{7,14}$/);

const validateRegisterationForm = registerationData => {
    console.log("registerationData", registerationData);

    for (let key in registerationData) {
        if (registerationData[key] === "") return false;
    }
    const isValidEmail = emailRegex.test(registerationData.email);
    const isValidPass = passRegex.test(registerationData.password);
    const matchPassword =
        registerationData.password === registerationData.confirmPassword;
    if (isValidEmail && isValidPass && matchPassword) return true;
    return false;
};

export default validateRegisterationForm;
