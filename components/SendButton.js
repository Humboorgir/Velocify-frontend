import React, { FC } from "react";

const SendButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "11px 25px",
        border: "none",
        backgroundColor: "#36a100",
        color: "white",
        cursor: "pointer",
        borderTopRightRadius: "5px",
        borderBottomRightRadius: "5px",
      }}
    >
      Send
    </button>
  );
};

export default SendButton;
