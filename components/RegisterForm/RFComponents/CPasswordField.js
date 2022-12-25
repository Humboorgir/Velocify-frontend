const PConfirmField = ({ styles }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        className={styles.input}
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Please confirm your password"
        minLength="8"
        maxLength="20"
      />
    </div>
  );
};

export default PConfirmField;
