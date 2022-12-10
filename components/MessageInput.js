import React, { FC } from "react";

const MessageInput = () => {
  return (
    <input
      id="msgInput"
      style={{
        padding: "10px 10px",
        border: "1px solid #bbbb",
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px",
        width: "550px",
      }}
      type={"text"}
      placeholder={"Message"}
    ></input>
  );
};

export default MessageInput;
