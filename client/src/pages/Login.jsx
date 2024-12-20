import { useState } from "react";
import Alert from "../components/Alert"; // Assuming the Alert component is in the same directory
import axios from '../lib/axios.js'
import {useNavigate} from "react-router-dom"
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState(null); // State to handle alert
    const navigate = useNavigate();

    async function onsub(event) {
        event.preventDefault();

        try {
            const response = await axios.post("/api/auth/signin", { email, password });
            if (response.status === 200) {
                setAlert({ type: "success", message: "Successfully logged in!" });
                setTimeout(() => {
                    setAlert(null); // Clear alert after some time
                    navigate("/home");
                }, 100);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setAlert({ type: "error", message: "Incorrect credentials!" });
            } else {
                setAlert({ type: "error", message: "An unknown error occurred." });
            }
            setTimeout(() => setAlert(null), 3000); // Clear alert after some time
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {alert && <Alert type={alert.type} message={alert.message} />} {/* Display alert */}
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
                <form onSubmit={onsub}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
