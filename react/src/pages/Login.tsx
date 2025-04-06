import React, { useState } from "react";
import { Eye, EyeOff } from 'lucide-react'; // optional icon lib
import { useAuth } from "@/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../utils/LocalStorageHandler"; // Adjusted the path to match the relative location

const Login = () => {

    const staticPassword = getFromLocalStorage();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState("");

    const { login } = useAuth(); // Assuming you have a useAuth hook to manage authentication
    const navigate = useNavigate(); // Assuming you are using react-router-dom for navigation

    const handleLogin = ()=>{            
        setError("");
         if (password === staticPassword) {
            login();
            navigate('/home');
        } else {
            setPassword("");
            setError("Incorrect password. Please try again.");
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-lg font-bold mb-4">Password Please <span className="text-red-500">*</span></h1>
            <div className="flex flex-col space-y-4">      
            <div className="relative w-full max-w-sm">
            <input
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter your password"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button className="bg-blue-500 text-white p-2 rounded" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;