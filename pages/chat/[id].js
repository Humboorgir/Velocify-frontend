import { io } from "socket.io-client";
import Router, { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import Head from "@/components/global/head";
import Sidebar from "@/components/app/sidebar";
import ChatInfo from "@/components/app/chatinfo";
import Messages from "@/components/app/messages";
import MessageInput from "@/components/app/messageinput";

// prettier-ignore
const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || "http://localhost:2000";

const Page = () => {
  const [user, setUser] = useState({
    username: "Loading...",
    _id: "Loading...",
  });
  const [chats, setChats] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [messages, setMessages] = useState([]);

  const router = useRouter();
  const socketRef = useRef(null);

  useEffect(() => {
    const { id } = router.query;
    if (!id) return;
    global.chatId = id;

    const userInfo = JSON.parse(localStorage.getItem("user"));
    global.username = userInfo.username;
    global.myId = userInfo._id;

    const token = localStorage.getItem("token");

    // initializing socket.io
    // first check if socket.io is already initialized
    if (!socketRef.current) {
      socketRef.current = io(BACKEND_ENDPOINT, {
        auth: {
          token,
        },
      });

      socketRef.current.on("messageCreate", (message) => {
        if (message.author._id !== global.myId && message.author._id !== global.recipient._id) return;
        setMessages((messages) => [...messages, message]);
      });

      socketRef.current.on("chatCreate", (chat) => {
        setChats((chats) => [...chats, chat]);
      });
    }

    socketRef.current.token = token;
    global.socket = socketRef.current;

    socketRef.current.emit("chats", global.myId, (chats) => {
      const currentChat = chats.find((chat) => chat._id == id);
      let recipient = currentChat.participants.filter((p) => p._id !== global.myId)[0];
      setUser(recipient);
      global.recipient = recipient;
      setChats(chats);
      console.log(chats);
    });
    socketRef.current.emit("chat", id, (chat) => {
      if (chat === null || !chat.messages) return setMessages([]);
      setMessages(chat.messages);
    });
  }, [router.query]);

  useLayoutEffect(() => {
    const messageBox = document.getElementById("messageBox");
    messageBox.scrollTop = messageBox.scrollHeight;
  }, [messages]);

  function messageCreate(e) {
    e.preventDefault();
    const message = e.target.message.value;
    e.target.message.value = "";
    const socket = global.socket;
    const chatId = global.chatId;
    const data = {
      message,
      chatId,
    };
    socket.emit("messageCreate", data, (message) => {
      if (!message) console.log("[messageCreate] no callback");
      console.log(message);
      setMessages((messages) => [...messages, message]);
    });
  }

  function handleAddUser(e, setOpen) {
    e.preventDefault();
    if (e.target.id.value == "" || e.target.id.value == " ") return;
    const userId = e.target.id.value;
    e.target.id.value = "";
    const socket = global.socket;
    const data = {
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
      <Head page={user.username} />
      {/* // container */}
      <div className="flex h-screen w-screen items-end text-textColor">
        <Sidebar
          chats={chats}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          handleAddUser={handleAddUser}
        />

        {/* chatbox */}
        <div
          className="relative flex h-full w-full flex-col justify-between bg-stone-900 py-3
         md:max-w-[calc(100%-400px)] md:pt-6">
          <ChatInfo user={user} />
          <Messages messages={messages} username={global.username} />
          <MessageInput messageCreate={messageCreate} />
        </div>
        {/* chat box end */}
      </div>
    </>
  );
};

export default Page;
