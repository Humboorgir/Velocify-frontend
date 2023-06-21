import Users from "@/components/app/users";
import { useRouter } from "next/router";
import { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
const Sidebar = ({ users }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isOnApp = router.pathname === "/app";
  return (
    <div
      className={`top-0 left-0
      ${isOnApp ? "" : "hidden"}
       h-[min(95vh,600px)] flex-col rounded-r-lg border border-neutral-700 md:w-[220px]
        ${isOnApp ? "" : "md"}:flex 
         relative w-[95vw] `}
    >
      {/* title  */}

      <div
        className="pointer-events-none top-0 left-0 z-10 flex h-12 w-full items-center justify-between py-5
       pl-3.5 pr-5 text-base text-slate-200"
      >
        Direct messages{" "}
        <div className="relative">
          <AiOutlinePlus
            className="pointer-events-auto h-7 w-7 rounded-full p-1
        text-slate-200 hover:cursor-pointer hover:text-slate-50"
            onClick={() => setOpen(true)}
          ></AiOutlinePlus>

          {open && (
            <div
              className="pointer-events-auto absolute right-0 top-full z-10 flex w-52
            translate-y-2 flex-col items-center gap-2 rounded-lg bg-[#31343d] pt-3 pb-5 transition-transform"
            >
              <h2 className="w-full text-center text-lg">Add someone</h2>
              <form className="flex flex-col items-center gap-3 px-3">
                <input
                  className="w-[94%] rounded-md p-2"
                  placeholder="username"
                ></input>
                <div className="flex w-full flex-row gap-2">
                  <button
                    className="w-[70%] rounded-md bg-gradient-to-br from-gradientYellow to-gradientOrange p-2"
                    type="submit"
                  >
                    Add
                  </button>
                  <button className="w-[30%] rounded-md outline-double outline-2 outline-yellowStrong">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <Users users={users} />
    </div>
  );
};

export default Sidebar;
