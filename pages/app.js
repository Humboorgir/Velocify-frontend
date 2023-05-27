import { useState, useEffect } from "react";
import Router from "next/router";
import Head from "@/components/global/head";
import Messages from "@/components/app/messages";
import MessageInput from "@/components/app/messageinput";

// prettier-ignore
const BACKEND_ENDPOINT = process.env.BACKEND_ENDPOINT || "http://localhost:2000";
const App = () => {
  // getting the token
  const [messages, setMessages] = useState([]);

  useEffect(() => {
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
        console.table(messages);
        setMessages(messages);
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
            <MessageInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
