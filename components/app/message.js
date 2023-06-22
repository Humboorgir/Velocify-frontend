import ProfilePicture from "@/components/app/profilepicture";
import Username from "@/components/app/username";
const Message = ({ message, sentByMe }) => {
  return (
    <div
      key={message._id}
      className={`message flex max-w-[90%] flex-row items-center gap-2
          ${sentByMe ? "self-end" : "self-start"}`}
    >
      {!sentByMe && <ProfilePicture />}

      {/* message container*/}
      <div
        className={`flex max-w-[100%] flex-col rounded-lg  ${
          sentByMe ? "bg-[#f3aa6b]" : "bg-[#282b30]"
        } p-3`}
      >
        {!sentByMe && (
          <Username username={message.author.username} sentByMe={sentByMe} />
        )}
        {/* message content  */}
        <div
          // prettier-ignore
          className={`ml-[3px] break-words
               ${sentByMe ? 'text-neutral-800' : 'text-textColorSemiWeak' }`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default Message;
