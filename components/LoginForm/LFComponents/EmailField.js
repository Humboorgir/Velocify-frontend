const EmailField = ({ styles }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor="email">Email Address</label>
      <input
        className={styles.input}
        type="email"
        id="email"
        name="email"
        placeholder="Please enter a valid email address"
        required
      />
    </div>
  );
};

export default EmailField;
