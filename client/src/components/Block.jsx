import React, { useEffect, useState } from "react";
import useHomeStore from "../store/store.js";
import axios from "../lib/axios.js"
export const Block = ({ name,id }) => {
  const selectedUser = useHomeStore((state) => state.selectedUser);
  const selectUser = useHomeStore((state) => state.selectUser);
  const messeges = useHomeStore((state)=>state.messeges)
  const setmesseges = useHomeStore((state)=>state.setmesseges)
  const [isactive,setstatus] = useState(false)
function oclick(){
  selectUser(id)
}  
useEffect(() => {
  console.log("Updated messages:", messeges); // Logs when messeges changes
}, [messeges]);
useEffect(()=>{
  async function getstatus(){
    try {
      const response = await axios.post('/api/messege/isactive',{id:id})
      if(response.data.status==="active")
        setstatus(true)
    } catch (error) {
      console.log(error)
    }
  }
  getstatus()
},[])
useEffect(()=>{
  
  async function getchat(){
    try {
      console.log(selectedUser)
      const response = await axios.get(`/api/messege/getchat/${selectedUser}`);
      if(response.status===200){
        console.log(response.data)
        console.log('msgs fetched'+response.data)
        setmesseges(response.data)
        console.log('xxx')
        console.log(messeges)
      }
        
     
      console.log(messeges)
    } catch (error) {
     console.log(error)
    }
    

  }
  
  getchat()
},[selectedUser])

  return (
    <div
      className="flex pr-10 flex-row items-center border border-white pt-1 pb-1 "
      onClick={oclick}
      style={{ backgroundColor: "#F2EED7", cursor: "pointer" }}
    >
 <div
  className="flex justify-center items-center w-16 h-16 rounded-full border-2 border-gray-300 mr-4 relative"
  style={{ backgroundColor: "#798645" }}
>
  <div className="text-white text-lg font-bold relative">
    {name[0].toUpperCase()}
    {isactive && (
      <div
        className="absolute top-5 bottom-0 left-5 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
        style={{ transform: "translate(50%, 50%)" }}
      ></div>
    )}
  </div>
</div>


      <div
        className=""
        style={{ color: "#798645", fontWeight: "bold", fontSize: "20px" }}
      >
        {name}
      </div>
    </div>
  );
};
