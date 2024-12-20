import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Corrected case
    withCredentials: true, // Use withCredentials for sending cookies
});

export default axiosInstance;
