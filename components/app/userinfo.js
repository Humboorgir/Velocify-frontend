import { FaBars } from "react-icons/fa";

const UserInfo = ({ user }) => {
  return (
    <div
      className="absolute top-0 z-10 flex h-16 w-full items-center justify-between
     border-l-2 border-stone-900 bg-surface px-[3%]"
    >
      <div className="flex items-center gap-2">
        <img className="h-12 w-12" src="/images/defaultUser.svg"></img>
        <div className="flex flex-col items-start justify-center">
          <span className="text-base text-textColorStrong">
            {user.username}
          </span>
          <span className="text-sm text-slate-300">Last seen recently</span>
        </div>
      </div>

      <div className="text-2xl">
        <FaBars />
      </div>
    </div>
  );
};

export default UserInfo;
