import { AiOutlineSearch as Search } from "react-icons/ai";
import { useState } from "react";

const SidebarHeader = ({ setSearchResults, chats }) => {
  const [show, setShow] = useState();
  function sortChats(e) {
    setShow(false);
    clearTimeout(global.timeout);
    let query = e.target.value.toLowerCase();
    if (!query.replace(/\s/g, "")) return setSearchResults(chats);
    let res = chats.filter((chat) => {
      let recipient = chat.participants.filter((p) => p._id != global.myId)[0].username.toLowerCase();
      return recipient.includes(query);
    });
    if (!res.length) {
      setShow(true);
      if (global.timeout) clearTimeout(global.timeout);
      global.timeout = setTimeout(() => {
        console.log("false now");
        setShow(false);
      }, 3000);
    }
    return setSearchResults(res);
  }
  return (
    <>
      <div
        className="top-0 left-0 flex h-12 w-full max-w-[90%] flex-col
       justify-center pl-3.5 text-left text-base text-slate-200">
        {/* search input  */}
        <div className="relative mr-14 w-full">
          <input
            type="text"
            className="w-full rounded-full bg-neutral-900 py-2 pl-10 text-textColor placeholder-textColorWeak
          outline-neutral-600 transition-all focus:outline-double focus:outline-2 focus:outline-neutral-600"
            placeholder="Search"
            onChange={sortChats}
          />
          <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-white" />
        </div>
      </div>
      {show && (
        <div className="mt-2 ml-2 flex items-center rounded-md bg-red-900 p-2 text-red-200">
          <Search className="mr-2 text-xl" />
          Not found
        </div>
      )}
    </>
  );
};

export default SidebarHeader;
