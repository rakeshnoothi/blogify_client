import axios from "axios";
import localStorageMethods from "../localStorageMethods";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_STRAPI_BASE_URL,
});

axiosInstance.interceptors.request.use(config => {
    const user = JSON.parse(localStorageMethods.getUser());
    if (
        config.url !== "/auth/local" &&
        config.url !== "/auth/local/register" &&
        user?.jwt
    ) {
        console.log("authenticated request");
        config.headers = { Authorization: `bearer ${user.jwt}` };
        return config;
    }
    console.log("unauthenticated request");
    return config;
});
export default axiosInstance;
