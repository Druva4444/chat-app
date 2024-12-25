import React, { useState } from 'react'
import axios from '../lib/axios.js'
import useHomeStore from "../store/store.js";

export const Msginput = () => {
  const selectedUser = useHomeStore((state) => state.selectedUser);
    const [msg,setMsg] = useState('');
    async function onsend(event){
      event.preventDefault()
        const response = await axios.post('/api/messege/sendmessege',{text:msg,receiverId:selectedUser})
        if(response.status===200)
          console.log('msg sent')
        setMsg('')
    }
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
    <form  className="flex items-center space-x-2" onSubmit={onsend}>
      <input
        type="text"
        value={msg}
        placeholder="Type a message"
      onChange={(event)=>setMsg(event.target.value)}
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </form>
  </div>
  )
}
