import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import Signup from "./pages/signup.jsx";
import { io } from "socket.io-client";
import useHomestore from "./store/store.js";
import Cookies from "js-cookie";
import { useEffect, useRef } from "react";
import Main from "./pages/main.jsx";

export default function App() {
  const id = Cookies.get('details');
  console.log(id);

  const socketRef = useRef(); // Using a ref to store the socket instance
  const setmesseges = useHomestore((state) => state.setmesseges);
  const selectedUser = useHomestore((state) => state.selectedUser);
  const messegesRef = useRef(); // Ref to keep track of the latest `messeges`

  const messeges = useHomestore((state) => state.messeges);
  messegesRef.current = messeges; // Update the ref whenever `messeges` changes

  useEffect(() => {
    // Initialize socket only once
    if (!socketRef.current) {
      socketRef.current = io('http://localhost:3000', {
        query: {
          userid: id,
        },
      });

      socketRef.current.on('newmessege', (data) => {
        console.log(data);
        console.log('recived from socket')
        console.log(selectedUser)
        if (data.receiverId === selectedUser || data.senderId === selectedUser) {
          console.log('msg updated');
          setmesseges([...messegesRef.current, data]); // Use the ref for the latest messages
        }
      });
      socketRef.current.on('newmessege1', (data) => {
        console.log(data);
        console.log('recived from socket')
        console.log(selectedUser)
        if (data.receiverId === selectedUser || data.senderId === selectedUser) {
          console.log('msg updated');
          setmesseges([...messegesRef.current, data]); // Use the ref for the latest messages
        }
      });
    }

    return () => {
      // Clean up socket connection on component unmount
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [id, selectedUser, setmesseges]); // Dependencies ensure socket setup is consistent

  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
