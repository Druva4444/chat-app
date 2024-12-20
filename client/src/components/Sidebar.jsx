import React, { useEffect, useState } from 'react';
import cookies from 'js-cookie';
import axios from '../lib/axios.js';
import { Block } from './Block.jsx';

export const Sidebar = () => {
  const id = cookies.get('details');
  console.log(id);
  const [users, setUsers] = useState([]);

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
            padding: '4px 0px',
          }}
        >
          chats
        </div>
      </div>
      {users.map((user, index) => (
        <Block name={user.name} key={index} />
      ))}
    </div>
  );
};
