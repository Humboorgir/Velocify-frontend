import Message from "@/components/app/message";

const Messages = ({ messages, username }) => {
  return (
    <>
      <div
        className="justiy-between flex h-[90%] w-[100%] flex-col items-start gap-3 overflow-y-scroll px-[12%] pt-14 pb-3"
        id="messageBox"
      >
        {/* show messages if there are any */}
        {messages &&
          messages.map((message, i) => {
            // true if the authors username is equal to the user reading it,
            const sentByMe = message.author.username == username;
            return <Message key={i} message={message} sentByMe={sentByMe} />;
          })}
      </div>
    </>
  );
};

export default Messages;
