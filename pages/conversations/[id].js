import { io } from "socket.io-client";
import Router, { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import Head from "@/components/global/head";
import Users from "@/components/app/users";
import Messages from "@/components/app/messages";
import MessageInput from "@/components/app/messageinput";

// prettier-ignore
const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || "http://localhost:2000";

const Page = () => {
  const [user, setUser] = useState({
    username: "Loading...",
    _id: "Loading...",
  });
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  const router = useRouter();
  const socketRef = useRef(null);

  useEffect(() => {
    const { id } = router.query;
    global.userId = id;
    if (!id) return;
    // getting the token
    const token = localStorage.getItem("token");

    getUsers(token).then((users) => {
      setUsers(users);
    });

    getConversation(token, id).then((conversation) => {
      if (conversation === null) setMessages([]);
      setMessages(conversation.messages);
      const myUsername = localStorage.getItem("username");
      const otherUser = conversation.users.filter(
        (user) => user.username !== myUsername
      )[0];

      setUser(otherUser);
    });

    // initializing socket.io
    // first check if socket.io is already initialized
    if (socketRef.current) return;
    socketRef.current = io(BACKEND_ENDPOINT);
    global.socket = socketRef.current;
    socket.on("messageCreate", (message) => {
      setMessages((messages) => {
        return [...messages, message];
      });
    });
  }, [router.query]);
  return (
    <>
      <Head page={user.username} />
      {/* // container */}
      <div className="absolute flex h-full w-full flex-row items-center justify-center text-textColor">
        {/* chatbox */}
        <div
          className="relative flex h-[min(95vh,600px)] w-[min(95vw,700px)]
       flex-col gap-3 rounded-l-lg border border-neutral-700 py-3"
        >
          <Messages messages={messages} />
          <MessageInput messageCreate={messageCreate} />
        </div>
        {/* user list  */}
        <Users users={users} />
      </div>
    </>
  );
};

function messageCreate(e) {
  e.preventDefault();
  const message = e.target.message.value;
  e.target.message.value = "";
  const socket = global.socket;
  const token = localStorage.getItem("token");
  const userId = global.userId;
  const data = {
    token,
    message,
    userId,
  };
  console.log("sending the following data:");
  console.table(data);
  socket.emit("messageCreate", data);
}

async function getUsers(token) {
  const res = await fetch(`${BACKEND_ENDPOINT}/users`, {
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

async function getConversation(token, id) {
  const res = await fetch(`${BACKEND_ENDPOINT}/conversation/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // redirect to login if the user is not signed in or has an expired token
  if (res.status === 401 || res.status === 403) return Router.push("/login");
  const conversationData = await res.json();
  return conversationData;
}

export default Page;
