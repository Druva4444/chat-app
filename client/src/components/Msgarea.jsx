import React from 'react';

export default function Msgarea() {
  return (
    <div
      className="msgarea"
      style={{
        flex: 1, // Ensures Msgarea takes the remaining 75% space
        height: '100vh',
        border: '1px solid black',
        marginRight: 0,
        backgroundColor: '#ffffff',
      }}
    >
      Msgarea
    </div>
  );
}
