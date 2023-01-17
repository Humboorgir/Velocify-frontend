import Head from "../components/head";
import { useState } from "react";
import Header from "../components/Home/header";
import Hero from "../components/Home/hero";
import Footer from "../components/footer";
import RegisterModal from "../components/RegisterModal/index";
import LoginModal from "../components/LoginForm/LoginModal";
import Alert from "../components/Home/alert";
export default function Home() {
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [logModalOpen, setLogModalOpen] = useState(false);
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
        <RegisterModal
          setAlert={setAlert}
          regModalOpen={regModalOpen}
          setRegModalOpen={setRegModalOpen}
        />
        <Header
          openRegModal={() => setRegModalOpen(true)}
          openLogModal={() => setLogModalOpen(true)}
        />
        <Hero />
        <Footer />
        {logModalOpen && (
          <LoginModal
            setRegModal={setRegModalOpen}
            setLogModal={setLogModalOpen}
            setAlert={setAlert}
            handleClose={() => setLogModalOpen(false)}
          />
        )}
      </>
    </>
  );
}
