import React from "react";

const UsernameField = ({ styles }) => {
  return (
    <>
      <div className={[styles.usernameField, styles.hiddenLeft].join(" ")}>
        <label htmlFor="username">Username</label>
        <input
          className={styles.input}
          type="text"
          id="username"
          name="username"
          placeholder="Please enter what you'd want people to call you"
          required
        />
      </div>
    </>
  );
};

export default UsernameField;
