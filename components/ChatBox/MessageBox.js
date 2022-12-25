import Message from "./Message";
const MessageBox = ({ styles, messages }) => {
  return (
    <div id="messageBox" className={styles.messageBox}>
      {messages.map((message) => (
        <Message styles={styles} message={message} key={message.id} />
      ))}
    </div>
  );
};

export default MessageBox;
