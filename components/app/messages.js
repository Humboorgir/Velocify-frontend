const Messages = ({ messages }) => {
  return (
    <>
      {messages.map((message) => {
        return (
          <div className="flex flex-col rounded-lg bg-[#282b30] p-3">
            <span>{message.author}</span>
            <span className="ml-[3px]">{message.content}</span>
          </div>
        );
      })}
    </>
  );
};

export default Messages;
