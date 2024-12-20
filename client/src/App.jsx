
import {  Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import Signup from "./pages/signup.jsx";

export default function App() {
  return (
   
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
   
  );
}
