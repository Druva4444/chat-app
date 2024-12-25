import React from 'react';
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const navigate  = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Animated Heading */}
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-bounce">
        Welcome to Our Chat app
      </h1>

      {/* Introductory Text */}
      <p className="text-lg sm:text-2xl mb-12 text-center max-w-2xl">
        implimented with basic css
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        {/* Login Button */}
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-blue-100" onClick={()=>{navigate('/login')}}>
          Login
        </button>

        {/* Signup Button */}
        <button className="px-6 py-3 bg-blue-700 font-semibold rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-blue-800" onClick={()=>{navigate('/signup')}}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Main;
