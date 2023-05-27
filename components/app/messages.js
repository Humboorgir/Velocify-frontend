const Messages = ({ messages }) => {
  return (
    <div className="absolute flex h-[84%] w-[95%] flex-col items-start gap-3 overflow-y-scroll">
      {messages.map((message) => {
        return (
          <div className="flex flex-col rounded-lg bg-[#282b30] p-3">
            <span>{message.author}</span>
            <span className="ml-[3px]">{message.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
