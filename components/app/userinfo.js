import { FaBars } from "react-icons/fa";

import Image from "next/image";
const UserInfo = ({ user }) => {
  return (
    <div
      className="absolute top-0 z-10 flex h-16 w-full items-center justify-between
     border-l-2 border-stone-900 bg-surface px-[3%]"
    >
      <div className="flex items-center gap-2">
        <Image
          className="h-11 w-11 rounded-full bg-slate-400"
          src="/images/defaultUser.svg"
          width={44}
          height={44}
        ></Image>
        <div className="flex flex-col items-start justify-center">
          <span className="text-base text-textColorStrong">
            {user.username}
          </span>
          <span className="text-sm text-slate-300">Last seen recently</span>
        </div>
      </div>

      <div className="text-2xl text-yellow">
        <FaBars />
      </div>
    </div>
  );
};

export default UserInfo;
