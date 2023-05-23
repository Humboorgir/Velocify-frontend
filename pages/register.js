import Router from "next/router";
import { useState } from "react";

import Head from "@/components/global/head";
import Title from "@/components/register/title";
import Return from "@/components/register/return";
import CredentialsLogin from "@/components/register/credentialslogin";
import ThirdPartyLogin from "@/components/register/thirdpartylogin";
const AUTH_SERVER = process.env.AUTH_SERVER || "http://localhost:2000/auth";
const Register = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  return (
    <>
      <Head page="register" />
      {/* container */}
      <div className="p-3 flex flex-col items-center justify-center min-h-full w-full absolute gap-3 md:gap-6">
        {/* the return option (only visible on large/computer screens) */}
        <Return />
        <Title />
        {/* the signup form */}
        <form
          className="flex flex-col md:flex-row justify-center items-center md:items-start rounded-xl 
        px-4 py-6 mb-4 w-[90vw] md:w-[700px] text-textColorSemiWeak bg-bgColorStrong relative gap-4"
          onSubmit={(e) => handleSubmit(e, setIsProcessing)}
        >
          {/* signup with credentials */}
          <CredentialsLogin isProcessing={isProcessing} />
          {/* signup with a third party provider */}
          <ThirdPartyLogin />
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
  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const user = { username, email, password };
  // for testing purposes
  console.table(user);
  let res = await fetch(`${AUTH_SERVER}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (res.status === 500) return console.log("register unsuccessful");
  if (res.status === 200) Router.push("/login");
}
export default Register;
