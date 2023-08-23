import { AiOutlineSearch } from "react-icons/ai";

const SidebarHeader = () => {
  return (
    <div
      className="top-0 left-0 flex h-12 w-full
       items-center pl-3.5 text-left text-base text-slate-200"
    >
      {/* search input  */}
      <div className="relative mr-14 w-full">
        <input
          type="text"
          className="w-full rounded-full bg-[#181818] py-2 pl-10 text-textColor placeholder-textColorWeak"
          placeholder="Search"
        />
        <AiOutlineSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-white" />
      </div>
    </div>
  );
};

export default SidebarHeader;
