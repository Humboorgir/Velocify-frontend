const PasswordField = ({ styles }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor="test">Password</label>
      <input
        className={styles.input}
        type="password"
        id="password"
        name="password"
        placeholder="Please enter a unique password"
        minLength="8"
        maxLength="20"
        required
      />
    </div>
  );
};

export default PasswordField;
