import Link from "next/link";

const User = ({ user }) => {
  return (
    <>
      {/* container  */}
      <Link
        href={`/chat/${user._id}`}
        key={user._id}
        className="flex w-full flex-row items-center justify-start gap-2 border-b border-neutral-700 p-3.5
               first-of-type:border-y hover:cursor-pointer hover:bg-[#2e3139] hover:transition-colors"
      >
        {/* profile picture  */}
        <div className="relative ">
          <img
            src="/images/defaultUser.svg"
            className="relative h-10 rounded-full bg-neutral-500"
          />
          <span className="absolute bottom-0 left-7 h-3.5 w-3.5 rounded-full border-2 border-gray-800 bg-green-400 "></span>
        </div>
        {/* profile picture end  */}

        {/* username and bio */}
        <div className="flex flex-col items-start justify-center">
          <span className="text-base text-slate-200">{user.username}</span>
          <span className="ml-1 text-[12px] text-slate-400">Hi there!</span>
        </div>
        {/* username and bio end  */}
      </Link>
    </>
  );
};

export default User;
