import Router from "next/router";
import { useState } from "react";

import Head from "@/components/global/head";
import Title from "@/components/register/title";
import Return from "@/components/register/return";
import Username from "@/components/register/username";
import Email from "@/components/register/email";
import Password from "@/components/register/password";
import Submit from "@/components/register/submit";

const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || "http://localhost:2000";
const Register = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  return (
    <>
      <Head page="register" />
      {/* container */}
      <div className="absolute flex min-h-full w-full flex-col items-center justify-center gap-3 p-3 md:gap-6">
        {/* the return option (only visible on large/computer screens) */}
        <Return />
        <Title />
        {/* the signup form */}
        <form
          className="relative mb-4 flex flex-col items-center justify-center 
        gap-4 rounded-xl bg-bgColorStrong p-6 text-textColorSemiWeak"
          onSubmit={(e) => handleSubmit(e, setIsProcessing)}>
          <Username />
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
  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const user = { username, email, password };
  // for testing purposes
  console.table(user);
  let res = await fetch(`${BACKEND_ENDPOINT}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (res.status === 500) return console.log("register unsuccessful");
  if (res.status === 200) Router.push("/login");
}
export default Register;
