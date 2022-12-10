import React from "react";

const ConfirmField = ({ styles }) => {
  return (
    <>
      <div className={[styles.confirmField, styles.hiddenLeft].join(" ")}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className={styles.input}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Please confirm your password"
          required
        />
      </div>
    </>
  );
};

export default ConfirmField;
