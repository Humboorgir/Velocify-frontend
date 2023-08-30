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
  const [messages, setMessages] = useState([]);

  const router = useRouter();
  const socketRef = useRef(null);

  useEffect(() => {
    const { id } = router.query;
    if (!id) return;
    global.chatId = id;

    // selectedUser.classList.add("selected");
    const user = JSON.parse(localStorage.getItem("user"));
    global.username = user.username;
    global.myId = user._id;
    // getting the token
    const token = localStorage.getItem("token");

    getChats(token).then((chats) => {
      const currentChat = chats.find((chat) => chat._id == id);
      let otherParticipant = currentChat.participants.filter((p) => p._id !== global.myId)[0];
      setUser(otherParticipant);

      setChats(chats);
    });

    getChat(token, id).then((chat) => {
      if (chat === null || !chat.messages) return setMessages([]);
      setMessages(chat.messages);
    });

    // initializing socket.io
    // first check if socket.io is already initialized
    if (socketRef.current) return;
    socketRef.current = io(BACKEND_ENDPOINT, { query: { token } });
    socketRef.current.token = token;
    global.socket = socketRef.current;

    socket.on("messageCreate", (message) => {
      // if the message is sent from anyone BUT the user you're chatting with, return;
      // will handle this differently later on
      // if (message.author._id !== global.myId && message.author._id !== global.userId) return;
      setMessages((messages) => [...messages, message]);
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
    const token = localStorage.getItem("token");
    const chatId = global.chatId;
    const data = {
      token,
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
      <Head page={user.username} />
      {/* // container */}
      <div className="flex h-screen w-screen items-end text-textColor">
        <Sidebar chats={chats} handleAddUser={handleAddUser} />

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

async function getChats(token) {
  const res = await fetch(`${BACKEND_ENDPOINT}/chats/${global.myId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // redirect to login if the user is not signed in or has an expired token
  if (res.status === 401 || res.status === 403) return Router.push("/login");
  const users = await res.json();
  return users;
}

async function getChat(token, id) {
  const res = await fetch(`${BACKEND_ENDPOINT}/chat/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // redirect to login if the user is not signed in or has an expired token
  if (res.status === 401 || res.status === 403) return Router.push("/login");
  const chatData = await res.json();
  return chatData;
}

export default Page;
