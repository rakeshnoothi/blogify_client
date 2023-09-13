import { useEffect, useState } from "react";
import axiosInstance from "../utils/api/axiosInstance";

const useFetch = config => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async config => {
        setIsLoading(true);
        try {
            const response = await axiosInstance(config);
            setData(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (config) {
            fetchData(config);
        }
    }, []);

    return {
        data,
        isLoading,
        fetchData,
    };
};

export default useFetch;
