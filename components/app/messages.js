import { useRouter } from "next/router";
const Messages = ({ messages }) => {
  const router = useRouter();
  // true if the user is on /app
  const showIcon = router.pathname === "/app";
  return (
    <div
      className="absolute flex h-[84%] w-[100%] flex-col items-start gap-3 overflow-y-scroll px-6"
      id="messageBox"
    >
      {showIcon && (
        // image box container
        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-4">
          {/* image container */}
          <div
            className="relative before:absolute before:top-0 
              before:left-0 before:h-full before:w-full before:rounded-full before:bg-gray-400
               before:mix-blend-multiply before:content-['']"
          >
            <img
              src="/velocifyLogo.svg"
              className="h-40 opacity-80 brightness-[40%] grayscale"
            ></img>
          </div>
          {/* text  */}
          <span className="brightness-[60%] grayscale">
            Select a channel to get started
          </span>
        </div>
      )}
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
