import React from "react";
import EmailField from "./RFComponents/EmailField";
import PasswordField from "./RFComponents/PasswordField";
import ConfirmField from "./RFComponents/ConfirmField";
import SubmitButton from "./RFComponents/SubmitButton";
import UsernameField from "./RFComponents/UsernameField";
const RegisterForm = ({ styles }) => {
  return (
    <>
      <form className={styles.form} action="/register" method="POST">
        <UsernameField styles={styles} />
        <EmailField styles={styles} />
        <PasswordField styles={styles} />
        <ConfirmField styles={styles} />
        <SubmitButton styles={styles} />
      </form>
    </>
  );
};

export default RegisterForm;
