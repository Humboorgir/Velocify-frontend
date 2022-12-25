import MessageInput from "./MessageInput";
import SendButton from "./SendButton";
import MessageBox from "./MessageBox";
import Head from "next/head";
const ChatBox = ({ messages, onClick, styles, submit }) => {
  return (
    <>
      <div className={styles.chatBox}>
        <MessageBox messages={messages} styles={styles} />
        <div className={styles.btnGroup}>
          <MessageInput styles={styles} submit={submit} />
          <SendButton onClick={onClick} styles={styles} />
        </div>
      </div>
    </>
  );
};
export default ChatBox;
