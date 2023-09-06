import { io } from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import Router from "next/router";
import Head from "@/components/global/head";
import Sidebar from "@/components/app/sidebar";
import VelocifyLogo from "@/components/app/velocifylogo";
import { useRouter } from "next/router";

// prettier-ignore
const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || "http://localhost:2000";

const App = () => {
  const router = useRouter();
  const [chats, setChats] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    global.myId = user._id;
    global.username = user.username;

    // getting the token
    const token = localStorage.getItem("token");

    // initializing socket.io
    // first check if socket.io is already initialized
    if (socketRef.current) return;
    socketRef.current = io(BACKEND_ENDPOINT, {
      auth: {
        token,
      },
    });
    socketRef.current.token = token;
    global.socket = socketRef.current;

    socketRef.current.emit("chats", global.myId, (chats) => {
      setChats(chats);
    });
    socketRef.current.on("chatCreate", (chat) => {
      setChats((chats) => [...chats, chat]);
    });
  }, []);

  function handleAddUser(e, setOpen) {
    e.preventDefault();
    if (e.target.id.value == "" || e.target.id.value == " ") return;
    const userId = e.target.id.value;
    e.target.id.value = "";
    const socket = global.socket;
    const token = localStorage.getItem("token");
    const data = {
      token,
      userId,
    };
    socket.emit("chatCreate", data, (chat) => {
      if (!chat) {
        console.log("[chatCreate] no callback");
        return setOpen((open) => !open);
      }

      setChats((chats) => [...chats, chat]);
      setOpen((open) => !open);
      router.push(`/chat/${chat._id}`);
    });
  }

  return (
    <>
      <Head page="app" />
      {/* // container */}
      <div className="flex h-screen w-screen items-end text-textColor">
        {/* user list  */}
        <Sidebar chats={chats} handleAddUser={handleAddUser} />
        {/* chatbox */}
        <div className="relative hidden h-screen w-full flex-col bg-stone-900 py-3 md:flex">
          <VelocifyLogo />
        </div>
      </div>
    </>
  );
};

export default App;
