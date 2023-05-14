import Head from "../components/head";
import { useState } from "react";
import Header from "../components/Home/header";
import Hero from "../components/Home/hero";
import Footer from "../components/footer";
import Alert from "../components/Home/alert";
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
        <Header
          openRegModal={() => setRegModalOpen(true)}
          openLogModal={() => setLogModalOpen(true)}
        />
        <Hero />
        <Footer />
      </>
    </>
  );
}
