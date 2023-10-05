import Router from "next/router";
import { useState } from "react";

import Head from "@/components/global/head";
import Error from "@/components/global/error";
import Title from "@/components/login/title";
import EmailField from "@/components/login/emailfield";
import PasswordField from "@/components/login/passwordfield";
import SubmitButton from "@/components/login/submitbutton";
import Link from "next/link";

const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || "http://localhost:2000";
const Login = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  function displayError(error) {
    setIsProcessing(false);
    setError(error);
    if (global.timeout) clearTimeout(global.timeout);
    global.timeout = setTimeout(() => {
      setError(null);
    }, 3000);
  }
  return (
    <>
      <Head page="login" />
      {error && <Error error={error} />}
      {/* container */}
      <div className="absolute flex min-h-full w-full flex-col items-center justify-center gap-3 p-3 md:gap-6">
        <Title />
        <form
          className="relative mb-4 flex flex-col items-center 
        justify-center gap-4 rounded-xl bg-bgColorStrong p-6 text-textColorSemiWeak"
          onSubmit={(e) => handleSubmit(e, setIsProcessing, displayError)}>
          <EmailField />
          <PasswordField />
          <div className="mr-auto ml-1 text-sm">
            Don't have an account?{" "}
            <Link className="text-sky-500 underline hover:text-sky-400" href="/">
              Sign up
            </Link>
          </div>
          <SubmitButton isProcessing={isProcessing} />
        </form>
      </div>
    </>
  );
};

async function handleSubmit(e, setIsProcessing, displayError) {
  e.preventDefault();
  setIsProcessing(true);
  const email = e.target.email.value;
  const password = e.target.password.value;
  const user = { email, password };

  console.table(user);

  let res = await fetch(`${BACKEND_ENDPOINT}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const title = "Failed to login";
  switch (res.status) {
    case 404:
      displayError({
        title,
        description: "User not found",
      });
      break;
    case 401:
      displayError({
        title,
        description: "Invalid password",
      });
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
