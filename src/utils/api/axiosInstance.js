import axios from "axios";
import localStorageMethods from "../localStorageMethods";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_STRAPI_BASE_URL,
});

axiosInstance.interceptors.request.use(config => {
    const jwt = localStorageMethods.getJwt();
    if (
        config.url !== "/auth/local" &&
        config.url !== "/auth/local/register" &&
        jwt
    ) {
        config.headers = { Authorization: `bearer ${jwt}` };
    }
    return config;
});

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
