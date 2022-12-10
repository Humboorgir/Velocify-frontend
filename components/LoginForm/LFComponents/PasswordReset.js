import React from "react";

const PasswordReset = ({ styles }) => {
  return (
    <>
      <a
        className={[styles.passreset, styles.hiddenTop].join(" ")}
        href="/passreset"
      >
        Forgot your password?
      </a>
    </>
  );
};

export default PasswordReset;
