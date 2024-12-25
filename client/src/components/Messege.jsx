import React from "react";

export const Messege = (props) => {
  const { msg, isSender } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isSender ? "flex-end" : "flex-start", // Align right for sender, left for receiver
      }}
    >
      <span
        style={{
          backgroundColor: isSender ? "#0084ff" : "gray", // Different colors for sender/receiver
          color: "white",
          padding: "10px 10px",
          borderRadius: isSender
            ? "10px 10px 0px 10px" // Adjust corners for sender
            : "10px 10px 10px 0px", // Adjust corners for receiver
          maxWidth: "60%", // Limit bubble width
          textAlign: "left",
        }}
      >
        {msg.text}
      </span>
    </div>
  );
};
