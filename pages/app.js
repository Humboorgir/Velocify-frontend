import { io } from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import Router from "next/router";
import Head from "@/components/global/head";
import Sidebar from "@/components/app/sidebar";
import VelocifyLogo from "@/components/app/velocifyLogo";

// prettier-ignore
const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || "http://localhost:2000";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // getting the token
    const token = localStorage.getItem("token");
    getUsers(token).then((users) => {
      // TODO: this would break as soon as two users have the same username,
      // handle this in a different way
      const user = JSON.parse(localStorage.getItem("user"));
      const username = user.username;
      users = users.filter((user) => user.username !== username);
      setUsers(users);
    });
  }, []);
  return (
    <>
      <Head page="app" />
      {/* // container */}
      <div className="flex h-full w-full flex-row items-center text-textColor">
        {/* user list  */}
        <Sidebar users={users} />
        {/* chatbox */}
        <div className="relative hidden h-screen w-full flex-col bg-stone-900 py-3 md:flex">
          <VelocifyLogo />
        </div>
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
