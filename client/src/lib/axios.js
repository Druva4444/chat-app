import axios from "axios";

const axiosInstance = axios.create({
    baseURL: '/api', // Corrected case
    withCredentials: true, // Use withCredentials for sending cookies
});

export default axiosInstance;
