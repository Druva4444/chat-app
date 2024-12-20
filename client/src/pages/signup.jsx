import React, { useState } from 'react';
import axios from '../lib/axios.js'
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const [email,setemail] = useState('')
  const [name,setname] = useState('')
  const [password,setpassword] = useState('')
  const navigate = useNavigate()
 async function handleSubmit(event){
    event.preventDefault()
    try {
        const response =  await axios.post('/api/auth/signup',{email,password,name})
        if(response.status===201){
            navigate('/login')
            console.log(response.data.msg)
        }
    } catch (error) {
       if(error.response && error.response.data)
        console.log('error occoured')
    else
    console.log('something went wrong') 
    }
    
     
 }
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(event)=>setname(event.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(event)=>setemail(event.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(event)=>setpassword(event.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>

          {/* Redirect to login */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:text-blue-600">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
