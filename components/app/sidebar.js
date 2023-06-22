import Users from "@/components/app/users";
import SidebarHeader from "@/components/app/sidebarheader";
import { useRouter } from "next/router";
import { useState } from "react";

const Sidebar = ({ users }) => {
  const router = useRouter();
  const isOnApp = router.pathname === "/app";
  return (
    <div
      className={`top-0 left-0 h-screen w-[95vw] flex-shrink-0 flex-col bg-[#212121] py-4
      md:max-w-[400px]
      ${isOnApp ? "" : "hidden"} ${isOnApp ? "" : "md:"}flex `}
    >
      <SidebarHeader />

      <Users users={users} />
    </div>
  );
};

export default Sidebar;
