import { io } from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import Router from "next/router";
import Head from "@/components/global/head";
import Users from "@/components/app/users";
import VelocifyIcon from "@/components/app/velocifyicon";

// prettier-ignore
const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || "http://localhost:2000";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // getting the token
    const token = localStorage.getItem("token");
    getUsers(token).then((users) => {
      setUsers(users);
    });
  }, []);
  return (
    <>
      <Head page="app" />
      {/* // container */}
      <div className="absolute flex h-full w-full flex-row items-center justify-center text-textColor">
        {/* chatbox */}
        <div
          className="relative hidden h-[min(95vh,600px)] w-[min(95vw,700px)]
         flex-col gap-3 rounded-l-lg border border-neutral-700 py-3 md:flex "
        >
          <VelocifyIcon />
        </div>
        {/* user list  */}
        <Users users={users} />
      </div>
    </>
  );
};

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

export default App;
