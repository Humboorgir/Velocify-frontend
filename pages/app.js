import { io } from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import Router from "next/router";
import Head from "@/components/global/head";
import Messages from "@/components/app/messages";
import MessageInput from "@/components/app/messageinput";

// prettier-ignore
const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || "http://localhost:2000";
const App = () => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    // getting the token
    const token = localStorage.getItem("token");
    fetch(`${BACKEND_ENDPOINT}/messages`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        // redirect to login if the user is not signed in or has an expired token
        if (res.status === 401 || res.status === 403)
          return Router.push("/login");
        return res.json();
      })
      .then((messages) => {
        setMessages(messages);
        const messageBox = document.getElementById("messageBox");
        messageBox.scrollTop = messageBox.scrollHeight;
      });

    // initializing socket io
    // first check if socket.io is already initialized
    if (socketRef.current) return;
    socketRef.current = io(BACKEND_ENDPOINT);
    global.socket = socketRef.current;
    socket.on("messageCreate", (message) => {
      console.table(message);
      setMessages((messages) => {
        return [...messages, message];
      });
    });
  }, []);
  return (
    <>
      <Head page="app" />
      {/* // container */}
      <div className="absolute grid h-full w-full place-items-center text-textColor">
        {/* chatbox */}
        <div className="relative flex h-[min(95vh,600px)] w-[min(95vw,700px)] flex-col gap-3 rounded-lg border border-neutral-700 py-1">
          <Messages messages={messages} />
          <div>
            <MessageInput messageCreate={messageCreate} />
          </div>
        </div>
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
  const data = {
    token,
    message,
  };
  console.log("sending the following data:");
  console.table(data);
  socket.emit("messageCreate", data);
}

export default App;
