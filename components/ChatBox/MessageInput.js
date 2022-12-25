const MessageInput = ({ styles, submit }) => {
  return (
    <input
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          submit();
        }
      }}
      id="input"
      className={styles.input}
      type={"text"}
      placeholder={"Message"}
    ></input>
  );
};

export default MessageInput;
