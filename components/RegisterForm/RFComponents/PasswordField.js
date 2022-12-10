import React from "react";

const PasswordField = ({ styles }) => {
  return (
    <>
      <div className={[styles.passwordField, styles.hiddenLeft].join(" ")}>
        <label htmlFor="password">Password</label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          placeholder="Please enter a unique password"
          required
        />
      </div>
    </>
  );
};

export default PasswordField;
