import Image from "next/image";
const Messages = ({ messages, username }) => {
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
          const sentByMe = message.author.username == username;
          return (
            <div
              key={message._id}
              className={`message flex flex-row items-center gap-2 ${
                sentByMe ? "self-end" : "self-start"
              }`}
            >
              {/* display the profile picture only if the message is NOT sent by me  */}
              {!sentByMe && (
                <Image
                  className={`h-[50px] w-[50px] rounded-full bg-neutral-500`}
                  src={"/images/defaultUser.svg"}
                  height={40}
                  width={40}
                  alt="user profile picture"
                />
              )}
              {/* username and message container*/}
              <div
                className={`flex flex-col rounded-lg ${
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
                  className={`ml-[3px] break-words max-w-[60vw] md:max-w-[560px] ${sentByMe ? 'text-neutral-800' : 'text-textColorSemiWeak' }`}
                >
                  {message.content}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Messages;
