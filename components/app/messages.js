import Message from "@/components/app/message";

const Messages = ({ messages, username }) => {
  return (
    <div
      className="flex h-[90%] w-[100%] flex-col items-start gap-3 overflow-y-scroll px-[12%] pb-2"
      id="messageBox"
    >
      {/* show messages if there are any */}
      {messages &&
        messages.map((message) => {
          // true if the authors username is equal to the user reading it,
          // const sentByMe = message.author.username == username;
          const sentByMe = false;
          return <Message message={message} sentByMe={sentByMe} />;
        })}
    </div>
  );
};

export default Messages;
