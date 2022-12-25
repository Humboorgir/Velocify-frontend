import React from "react";
import EmailField from "./LFComponents/EmailField";
import PasswordField from "./LFComponents/PasswordField";
import SubmitButton from "./LFComponents/SubmitButton";
import PasswordReset from "./LFComponents/PasswordReset";
const LoginForm = ({ styles }) => {
  return (
    <>
      <form className={styles.form} action="/api/login" method="POST">
        <EmailField styles={styles} />
        <PasswordField styles={styles} />
        <SubmitButton styles={styles} />
        <PasswordReset styles={styles} />
      </form>
    </>
  );
};

export default LoginForm;
