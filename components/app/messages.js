import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Messages = ({ messages, loading }) => {
  return (
    <div
      className="absolute flex h-[84%] w-[100%] flex-col items-start gap-3 overflow-y-scroll px-6"
      id="messageBox"
    >
      {messages &&
        messages.map((message) => {
          return (
            <div
              key={Math.random()}
              className={`message flex flex-col ${
                message.author.username == localStorage.getItem("username")
                  ? "self-end bg-[#f3aa6b] text-neutral-900"
                  : ""
              } rounded-lg bg-[#282b30] p-3`}
            >
              <span>{message.author.username}</span>
              <span className="ml-[3px]">{message.content}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Messages;
