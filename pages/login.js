import Router from "next/router";
import { useState } from "react";

import Head from "@/components/global/head";
import Title from "@/components/login/title";
import Return from "@/components/login/return";
import Email from "@/components/login/email";
import Password from "@/components/login/password";
import Submit from "@/components/login/submit";

const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || "http://localhost:2000";
const Login = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  return (
    <>
      <Head page="login" />
      {/* container */}
      <div className="absolute flex min-h-full w-full flex-col items-center justify-center gap-3 p-3 md:gap-6">
        {/* the return option (only visible on large/computer screens) */}
        <Return />
        <Title />
        {/* the login form */}
        <form
          className="relative mb-4 flex flex-col items-center 
        justify-center gap-4 rounded-xl bg-bgColorStrong p-6 text-textColorSemiWeak"
          onSubmit={(e) => handleSubmit(e, setIsProcessing)}>
          {/* login with credentials */}
          <Email />
          <Password />
          <Submit isProcessing={isProcessing} />
        </form>
      </div>
    </>
  );
};

async function handleSubmit(e, setIsProcessing) {
  e.preventDefault();
  setIsProcessing(true);
  // TODO: throw an error if the password field doesnt match confirm password
  // i know this isnt hard but im too lazy to do the css styling at the moment.
  const email = e.target.email.value;
  const password = e.target.password.value;
  const user = { email, password };
  // for testing purposes
  console.table(user);
  let res = await fetch(`${BACKEND_ENDPOINT}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  switch (res.status) {
    case 404:
      setIsProcessing(false);
      console.log("User not found");
      break;
    case 401:
      setIsProcessing(false);
      console.log("Invalid password");
      break;
    case 200:
      res = await res.json();
      const user = JSON.stringify(res.user);
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("user", user);
      Router.push("/app");
      break;
  }
}
export default Login;
