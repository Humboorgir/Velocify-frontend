import { FaTimes } from "react-icons/fa";
const Message = ({ styles, message }) => {
  return (
    <div className={styles.message}>
      {message.text} <FaTimes style={{ display: "block", float: "right" }} />
    </div>
  );
};
export default Message;
