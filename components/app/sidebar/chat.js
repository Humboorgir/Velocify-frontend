import Link from "next/link";

const Chat = ({ chat }) => {
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
          <img src="/images/defaultUser.svg" className="relative h-12 rounded-full bg-neutral-500" />
          <span className="absolute bottom-0 left-9 h-3.5 w-3.5 rounded-full border-2 border-gray-800 bg-green-400 "></span>
        </div>
        {/* profile picture end  */}

        {/* username and bio */}
        <div className="flex flex-col items-start justify-center">
          <span className="text-lg text-slate-200">
            {chat.participants.filter((x) => x._id !== global.myId)[0].username}
          </span>
          <span className="ml-1 text-[14px] text-slate-400">Hi there!</span>
        </div>
        {/* username and bio end  */}
      </Link>
    </>
  );
};

export default Chat;
