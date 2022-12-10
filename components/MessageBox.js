import { FC, useState } from "react";
import Message from "./Message";
const MessageBox = ({ messages }) => {
  return (
    <div id="messagebox" className="messagebox" style={messageBoxStyle}>
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};
const messageBoxStyle = {
  position: "absolute",
  height: "85%",
  width: "97%",
  display: "flex",
  flexDirection: "column",
  rowGap: "5px",
  overflowY: "scroll",
  overflowX: "hidden",
};

export default MessageBox;
