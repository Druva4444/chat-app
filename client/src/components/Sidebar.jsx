import React, { useEffect, useState } from 'react';
import cookies from 'js-cookie';
import axios from '../lib/axios.js';
import { Block } from './Block.jsx';
import { useNavigate } from 'react-router-dom';
export const Sidebar = () => {
const navigate = useNavigate()
  const id = cookies.get('details');
  console.log(id);
  const [users, setUsers] = useState([]);
 async  function handlelogout(){
    
    try {
      const response = await axios.post('/api/auth/logout',{})
      if(response.status===200)
        navigate('/')

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get('/api/messege/getusers');
        if (response.status === 200) {
          console.log(response);
          setUsers(response.data.users);
        }
      } catch (error) {
        if (error.response && error.response.data) {
          console.log(error.response.data);
        }
      }
    }
    getUsers();
  }, []);

  return (
    <div
      className="sidebar"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#F2EEE7',
        width: '20%', // Ensures Sidebar takes 25% width of the container
      }}
    >
      <div
        className="flex items-center border border-white pt-1 pb-1"
        style={{ backgroundColor: '#F2EED7' }}
      >
       <div
  style={{
    color: '#798645',
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '4px 0',
    display: 'flex',
    width:'100%',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensures vertical alignment
    borderBottom: '2px solid #ccc', // Optional: Adds a separator
  }}
>
  <p style={{ margin: 0 }}>Chats</p>
  <button
    style={{
      backgroundColor: '#798645',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '4px 8px',
      cursor: 'pointer',
      fontWeight: 'bold',
    }}
    onClick={handlelogout}
    
  >
    Logout
  </button>
</div>

      </div>
      {users.map((user, index) => (
        <Block name={user.name} key={index} id={user._id} />
      ))}
    </div>
  );
};
