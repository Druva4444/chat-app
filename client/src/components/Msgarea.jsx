import React from "react";
import useHomeStore from "../store/store.js";
import { Msginput } from "./Msginput.jsx";
import { Messege } from "./Messege.jsx";

export default function Msgarea() {
  const messeges = useHomeStore((state) => state.messeges);
  const selectedUser = useHomeStore((state) => state.selectedUser);

  return (
    
    <div
    className="msgarea"
    style={{
      flex: 1,
      height: "100vh",
      border: "1px solid black",
      marginRight: 0,
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "column",
    }}
  >
    
    <div
  className="mainmsgs"
  style={{
    height: "93%",
    display: "flex",
    flexDirection: "column", // Ensures vertical stacking
    overflowY: "auto", // Enables scrolling for overflow
    gap: "10px", // Adds space between messages
    padding: "10px", 
  }}
>
  {messeges.map((messege, index) => (
    <Messege key={index} msg={messege} isSender={messege.receiverId === selectedUser} />
  ))}
</div>


    {selectedUser && (
      <div className="msginput" style={{ height: "7%" }}>
        <Msginput />
      </div>
    )}
  </div>
  
  );
}
