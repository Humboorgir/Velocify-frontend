import ProfilePicture from "@/components/app/profilepicture";
const Message = ({ message, sentByMe }) => {
  return (
    <div
      key={message._id}
      className={`message flex max-w-[80%] flex-row items-center gap-2
          ${sentByMe ? "self-end" : "self-start"}`}
    >
      <ProfilePicture sentByMe={sentByMe} />
      {/* username and message container*/}
      <div
        className={`flex max-w-[80%] flex-col rounded-lg  ${
          sentByMe ? "bg-[#f3aa6b]" : "bg-[#282b30]"
        } p-3`}
      >
        {/* username (don't display if the message is sent by the user himself)*/}
        {!sentByMe && (
          <span
            className={`mb-1 ${
              sentByMe ? "text-neutral-900" : "text-textColor"
            } hover:cursor-pointer hover:underline`}
          >
            {message.author.username}
          </span>
        )}
        {/* message content  */}
        <span
          // prettier-ignore
          className={`ml-[3px] break-words max-w-[80%]
               ${sentByMe ? 'text-neutral-800' : 'text-textColorSemiWeak' }`}
        >
          {message.content}
        </span>
      </div>
    </div>
  );
};

export default Message;
