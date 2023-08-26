import Chats from "@/components/app/sidebar/chats";
import SidebarHeader from "@/components/app/sidebar/sidebarheader";
import AddUserButton from "@/components/app/sidebar/adduserbutton";
import { useRouter } from "next/router";

const Sidebar = ({ chats }) => {
  const router = useRouter();
  const isOnApp = router.pathname === "/app";
  return (
    <div
      className={`relative top-0 left-0 h-screen w-full flex-shrink-0 flex-col overflow-y-scroll
      bg-[#212121] py-4 md:max-w-[400px]
      ${isOnApp ? "" : "hidden"} ${isOnApp ? "" : "md:"}flex`}>
      <SidebarHeader />

      <AddUserButton />

      <Chats chats={chats} />
    </div>
  );
};

export default Sidebar;
