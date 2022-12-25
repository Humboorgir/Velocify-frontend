const UsernameField = ({ styles }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor="username">Username</label>
      <input
        className={styles.input}
        type="text"
        id="username"
        name="username"
        placeholder="Please enter a username of your choice"
        minLength="3"
        maxLength="16"
        required
      />
    </div>
  );
};

export default UsernameField;
