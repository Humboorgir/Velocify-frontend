import Chats from "@/components/app/sidebar/chats";
import SidebarHeader from "@/components/app/sidebar/sidebarheader";
import AddUserButton from "@/components/app/sidebar/adduserbutton";
import UserInfo from "@/components/app/sidebar/userinfo";
import { useRouter } from "next/router";

const Sidebar = ({ chats, setSearchResults, searchResults, handleAddUser, onlineUsers }) => {
  const router = useRouter();
  const isOnApp = router.pathname === "/app";
  return (
    <div
      className={`top-0 left-0 h-screen w-full flex-shrink-0 flex-col
       bg-[#212121] pt-4 md:max-w-[400px]
      ${isOnApp ? "" : "hidden"} ${isOnApp ? "" : "md:"}flex`}>
      <div className="scrollbar-transparent relative h-[calc(100%-76px)] flex-shrink-0 flex-col overflow-y-scroll">
        <SidebarHeader setSearchResults={setSearchResults} chats={chats} />

        <Chats searchResults={searchResults} chats={chats} onlineUsers={onlineUsers} />

        <AddUserButton handleAddUser={handleAddUser} />
      </div>

      <UserInfo />
    </div>
  );
};

export default Sidebar;
