import React from 'react';
import { Sidebar } from '../components/Sidebar';
import Msgarea from '../components/Msgarea';

export const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh', // Ensures the full viewport height is utilized
      }}
    >
      <Sidebar />
      <Msgarea />
    </div>
  );
};
