import Users from "@/components/app/users";
import SidebarHeader from "@/components/app/sidebarheader";
import { useRouter } from "next/router";
import { useState } from "react";

const Sidebar = ({ users }) => {
  const router = useRouter();
  const isOnApp = router.pathname === "/app";
  return (
    <div
      className={`top-0 left-0 h-screen py-4
      ${isOnApp ? "" : "hidden"}
       h-[min(95vh,600px)] flex-col bg-[#212121] md:w-[250px]
        ${isOnApp ? "" : "md"}:flex 
         relative w-[95vw] `}
    >
      <SidebarHeader />

      <Users users={users} />
    </div>
  );
};

export default Sidebar;
