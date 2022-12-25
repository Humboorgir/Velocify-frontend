import React, { FC } from "react";

const SendButton = ({ styles, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      Send
    </button>
  );
};

export default SendButton;
