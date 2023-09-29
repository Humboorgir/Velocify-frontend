import Link from "next/link";
import Image from "next/image";

const Chat = ({ chat }) => {
  let lastMessage = chat.messages[0].content;
  // if (lastMessage.length > 24) {
  //   lastMessage = lastMessage.slice(0, 22) + "...";
  // }
  return (
    <>
      {/* container  */}
      <Link
        href={`/chat/${chat._id}`}
        key={chat._id}
        className={`flex w-full flex-row items-center justify-start gap-2 rounded-lg
        p-4 first-of-type:mt-2 hover:cursor-pointer hover:bg-[#2e3139] hover:transition-colors ${chat._id}`}>
        {/* profile picture  */}
        <div className="relative ">
          <Image
            src="/images/defaultUser.svg"
            height={48}
            width={48}
            className="relative h-12 min-w-[48px] rounded-full bg-neutral-500"
          />
          <span className="absolute bottom-0 left-9 h-3.5 w-3.5 rounded-full border-2 border-gray-800 bg-green-400 "></span>
        </div>
        {/* profile picture end  */}

        {/* username and bio */}
        <div className="flex w-full flex-col items-start justify-center">
          <span className="text-lg text-slate-200">
            {chat.participants.filter((x) => x._id !== global.myId)[0].username}
          </span>
          <span className="max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap text-[14px] text-slate-400">
            {lastMessage}
          </span>
        </div>
        {/* username and bio end  */}
      </Link>
    </>
  );
};

export default Chat;
