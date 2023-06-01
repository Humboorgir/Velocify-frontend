// test data
const users = [
  { username: "Humboorgir" },
  { username: "Tqkel" },
  { username: "Levitage" },
  { username: "ItzSad10" },
];
const Users = () => {
  return (
    <div className="absolute top-0 left-full flex h-full w-[200px] flex-col rounded-r-lg border border-neutral-700">
      {users.map((user) => {
        // TODO: use user._id instead of Math.random();
        return (
          // the whole user box (for each user)
          <div
            key={Math.random()}
            className="flex w-full flex-row items-center justify-start gap-2 border-b border-neutral-700 p-4"
          >
            {/* profile picture  */}
            <div className="relative ">
              <img
                src="/images/defaultUser.svg"
                className="relative h-10 rounded-full bg-neutral-500"
              />
              <span className="absolute bottom-0 left-7 h-3.5 w-3.5 rounded-full border-2 border-gray-800 bg-green-400 "></span>
            </div>
            {/* username and bio */}
            <div className="flex flex-col items-start justify-center">
              <span className="text-base text-slate-200">{user.username}</span>
              <span className="ml-1 text-[12px] text-slate-400">Hi there!</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
