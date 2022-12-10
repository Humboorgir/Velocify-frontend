import { useState, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import Script from "next/script";
import Head from "next/head";
import io from "socket.io-client";
export default function app(props) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "ilia",
      text: "",
    },
    {
      id: 2,
      author: "ilia",
      text: "",
    },
    {
      id: 3,
      author: "ilia",
      text: "",
    },
    {
      id: 4,
      author: "ilia",
      text: "",
    },
    {
      id: 5,
      author: "ilia",
      text: "",
    },
    {
      id: 6,
      author: "ilia",
      text: "",
    },
    {
      id: 7,
      author: "ilia",
      text: "",
    },
    {
      id: 8,
      author: "ilia",
      text: "",
    },
    {
      id: 9,
      author: "ilia",
      text: "",
    },
  ]);
  const socket = io("http://localhost:8080");
  useEffect(() => socketInitializer(), []);
  function socketInitializer() {
    socket.emit("messages");
    socket.on("messages", async (data) => {
      await setMessages(data);
    });
  }
  const sendMessage = async () => {
    let input = document.getElementById("msgInput");
    if (!input) return console.log("no input");
    await setMessages([
      ...messages,
      { id: messages.length + 1, author: "ilia", text: input.value },
    ]);
    await socket.emit("message", {
      id: messages.length + 1,
      text: input.value,
    });
    let messagebox = document.getElementById("messagebox");
    if (!messagebox) return console.log("no messagebox");
    messagebox.scrollTop = messagebox.scrollHeight;
    input.value = "";
  };
  return (
    <>
      <ChatBox messages={messages} onClick={sendMessage} />
    </>
  );
}
