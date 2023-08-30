import Image from "next/image";
import useClipboard from "@/hooks/useClipboard";
import { IoMdSettings as Settings } from "react-icons/io";

const UserInfo = () => {
  const clipboard = useClipboard();
  return (
    <div className="flex h-[76px] flex-row items-center justify-center bg-neutral-900 px-6">
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
      <div className="ml-2">
        <h3 className="text-lg">{global.username}</h3>
        <div
          className="group relative cursor-pointer"
          onClick={() => {
            clipboard.copy(global.myId);
          }}>
          <p className="z-40 text-sm text-slate-400">{global.myId}</p>
          <div
            className="absolute bottom-[calc(100%+8px)] left-[80%] w-max translate-x-[-50%] scale-75 rounded-md bg-slate-400/20
          p-1 text-sm text-slate-300 opacity-0 transition-all duration-[100ms]
          ease-out group-hover:scale-100 group-hover:opacity-100">
            {clipboard.copied ? "Copied!" : "Click to copy!"}
          </div>
        </div>
      </div>
      <Settings className="ml-auto h-8 w-8" />
    </div>
  );
};

export default UserInfo;
