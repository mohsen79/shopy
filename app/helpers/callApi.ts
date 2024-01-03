import axios from "axios";
import ValidationError from "../exceptions/ValidationError";

const callApi = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/api'
    });

    axiosInstance.interceptors.request.use(
        config => {
            return config;
        },
        err => { throw err; }
    );

    axiosInstance.interceptors.response.use(
        res => {
            return res
        },
        err => {
            console.log(err);
            const res = err?.response;
            if (res) {
                if (res.status === 422) {
                    throw new ValidationError(res.data.errors);
                }
            }

            throw err;
        }
    );

    return axiosInstance;
}

export default callApi;