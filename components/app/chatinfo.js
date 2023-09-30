import { FaBars } from "react-icons/fa";

import Image from "next/image";
const ChatInfo = ({ user, onlineUsers }) => {
  function checkOnline() {
    let onlineUserIds = onlineUsers.map(
      (chat) => chat.participants.filter((p) => p._id != global.myId)[0]._id
    );
    let otherUserId = user._id;
    if (onlineUserIds.includes(otherUserId)) return true;
    return false;
  }
  const status = checkOnline() ? "Online" : "Offline";
  let statusTextColor = checkOnline() ? "text-green-300" : "text-slate-300";
  return (
    <div
      className="absolute top-0 z-10 flex h-16 w-full items-center justify-between
     border-l-2 border-stone-900 bg-surface px-[3%]">
      <div className="flex items-center gap-2">
        <Image
          className="h-11 w-11 rounded-full bg-slate-400"
          src="/images/defaultUser.svg"
          width={44}
          height={44}
          alt="Recipient profile picture"></Image>
        <div className="flex flex-col items-start justify-center">
          <span className="text-base text-textColorStrong">{user.username}</span>
          <span className={`text-sm ${statusTextColor}`}>{status}</span>
        </div>
      </div>

      <div className="group relative cursor-pointer text-3xl">
        <FaBars />
        <span
          className="invisible absolute top-full right-full w-max
      origin-top-right scale-75 rounded-md bg-slate-400/20 p-2 text-sm opacity-0 transition-all
      duration-[120ms] ease-out group-hover:visible group-hover:!scale-100 group-hover:opacity-100">
          Not available yet
        </span>
      </div>
    </div>
  );
};

export default ChatInfo;
