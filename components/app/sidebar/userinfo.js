import Image from "next/image";
import useClipboard from "@/hooks/useClipboard";
import { IoMdSettings as Settings } from "react-icons/io";

const UserInfo = () => {
  const clipboard = useClipboard();
  return (
    <div className="flex h-[76px] flex-row items-center justify-center bg-neutral-900 px-6">
      {/* Profile picture */}
      <div className="relative">
        <Image
          className="mt-1 h-[42px] w-[42px] rounded-full bg-neutral-500"
          src={"/images/defaultUser.svg"}
          height={42}
          width={42}
          alt="user profile picture"
        />
        <span className="absolute bottom-0 left-[30px] h-3.5 w-3.5 rounded-full border-2 border-gray-800 bg-green-400 " />
      </div>
      {/* Profile picture end  */}

      {/* Username and ID  */}
      <div className="ml-2">
        {/* username  */}
        <h3 className="text-lg">{global.username}</h3>
        {/* ID and popup container */}
        <div
          className="group relative cursor-pointer"
          onClick={() => {
            clipboard.copy(global.myId);
          }}>
          {/* ID  */}
          <p className="z-40 text-sm text-slate-400">{global.myId}</p>
          {/* 'click to copy' popup  */}
          <div
            className="invisible absolute bottom-[calc(100%+8px)] left-[80%] w-max translate-x-[-50%] scale-75 rounded-md
          bg-slate-400/20 py-1 px-1.5 text-sm text-slate-300 opacity-0 transition-all duration-[120ms] ease-out
          group-hover:visible group-hover:scale-100 group-hover:opacity-100">
            {clipboard.copied ? "Copied!" : "Click to copy!"}
          </div>
        </div>
        {/* ID and popup container end  */}
      </div>
      {/* Username and ID end  */}

      {/* Settings icon */}
      <div className="group relative ml-auto">
        <Settings className="h-8 w-8 cursor-pointer" />
        <span
          className="invisible absolute bottom-full right-full w-max
      origin-bottom-right scale-75 rounded-md bg-slate-400/20 p-2 text-sm opacity-0 transition-all
      duration-[120ms] ease-out group-hover:visible group-hover:!scale-100 group-hover:opacity-100">
          Not available yet
        </span>
      </div>
      {/* Settings icon end  */}
    </div>
  );
};

export default UserInfo;
