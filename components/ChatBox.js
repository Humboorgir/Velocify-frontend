import MessageInput from "./MessageInput";
import SendButton from "./SendButton";
import MessageBox from "./MessageBox";
const ChatBox = ({ messages, onClick }) => {
  return (
    <div className="chatBox" style={chatBoxStyle}>
      {/* Message Box [The box that displays messages]  */}
      <MessageBox messages={messages} />
      {/* Button Group */}
      <div className="btnGroup" style={btnGroupStyle}>
        {/* Message Input (Button group) */}
        <MessageInput />
        {/* Send Button (Button group) */}
        <SendButton onClick={onClick} />
      </div>
    </div>
  );
};
const chatBoxStyle = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid #bbbb",
  borderRadius: "5px",
  padding: "10px",
  width: "700px",
  height: "500px",
};
const btnGroupStyle = {
  fontSize: "0px",
  position: "absolute",
  bottom: "0",
  width: "670px",
  left: "50%",
  right: "50%",
  transform: "translate(-50%, -50%)",
};
export default ChatBox;
