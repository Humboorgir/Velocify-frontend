import { FaTimes } from "react-icons/fa";
const Message = ({ message }) => {
  return (
    <div style={messageStyle}>
      {message.text} <FaTimes style={faTimesStyle} />
    </div>
  );
};
const messageStyle = {
  padding: "20px",
  fontSize: "16px",
  backgroundColor: "rgba(182, 182, 182, 0.401)",
  borderRadius: "5px",
};
const faTimesStyle = {
  float: "right",
  color: "red",
  cursor: "pointer",
};

export default Message;
