import React from "react";

const Agreement = ({ styles }) => {
  return (
    <div className={styles.agreement}>
      <input type="checkbox" required /> I agree to Velocify's{" "}
      <a href="/terms">Terms of service</a>
    </div>
  );
};

export default Agreement;
