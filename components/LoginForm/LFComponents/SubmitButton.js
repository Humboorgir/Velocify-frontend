import React from "react";

const SubmitButton = ({ styles }) => {
  return (
    <>
      <button
        className={[styles.btn, styles.transBtn, styles.hiddenTop].join(" ")}
        type="submit"
      >
        Login
      </button>
    </>
  );
};

export default SubmitButton;
