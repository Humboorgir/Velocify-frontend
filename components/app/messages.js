const Messages = ({ messages }) => {
  return (
    <div
      className="absolute flex h-[84%] w-[100%] flex-col items-start gap-3 overflow-y-scroll px-6"
      id="messageBox"
    >
      {/* show messages if there are any */}
      {messages &&
        messages.map((message) => {
          // if the authors username is equal to the user reading it,
          // set self-align to end and background color to orange
          const messageStyle =
            message.author.username == localStorage.getItem("username")
              ? "self-end bg-[#f3aa6b] text-neutral-900"
              : "";
          // TODO: change key from Math.random() to the actual message id
          return (
            <div
              key={Math.random()}
              className={`message flex flex-col ${messageStyle} rounded-lg bg-[#282b30] p-3`}
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
