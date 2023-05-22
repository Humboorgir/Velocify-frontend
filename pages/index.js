import Head from "../components/head";
import { useState } from "react";
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import Footer from "../components/footer";
import Alert from "../components/home/alert";
export default function Home() {
  const [alert, setAlert] = useState({
    display: false,
    ok: false,
    content: "",
  });
  return (
    <>
      <Head page="Home" />
      <>
        <Alert alert={alert} />
        <Header />
        <Hero />
        <Footer />
      </>
    </>
  );
}
