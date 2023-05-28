const Messages = ({ messages }) => {
  return (
    <div
      className="scrollbar-track-gray-500 scrollbar-thumb-gray-300 absolute flex h-[84%] w-[100%] flex-col items-start gap-3  
    overflow-y-scroll px-6"
    >
      {messages &&
        messages.map((message) => {
          return (
            <div
              className={`flex flex-col ${
                message.author == "Person 1"
                  ? "self-end bg-[#f3aa6b] text-neutral-900"
                  : ""
              } rounded-lg bg-[#282b30] p-3`}
            >
              <span>{message.author}</span>
              <span className="ml-[3px]">{message.content}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Messages;
