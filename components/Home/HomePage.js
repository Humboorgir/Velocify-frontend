import HHeader from "./HComponents/HHeader";
import HHero from "./HComponents/HHero";
import Footer from "../General/Footer";
import RegisterModal from "../RegisterForm/RegisterModal";
import LoginModal from "../LoginForm/LoginModal";
import { useState } from "react";
import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
const HomePage = ({ styles }) => {
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [logModalOpen, setLogModalOpen] = useState(false);
  const [alert, setAlert] = useState({
    display: false,
    ok: false,
    content: "",
  });
  return (
    <>
      <div className={styles.body}>
        {alert.display && (
          <motion.div
            key="alert"
            initial={{ y: "-100vh", x: "-50%", opacity: 0 }}
            animate={{
              y: "-50%",
              x: "-50%",
              opacity: 1,
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 30,
                stiffness: 400,
              },
            }}
            exit={{
              y: "100vh",
              x: "-50%",
              opacity: 0,
            }}
            className="alert"
            style={
              alert.ok
                ? { color: "#baffc3", backgroundColor: "#27a800" }
                : { color: "#f8d7da", backgroundColor: "#ab0011" }
            }
          >
            <strong>
              {alert.ok ? <FaCheckCircle /> : <FaExclamationTriangle />}{" "}
              {alert.ok ? "SUCCESS!" : "ERROR!"}:
            </strong>
            {alert.content}
          </motion.div>
        )}
        <HHeader
          styles={styles}
          openRegModal={() => setRegModalOpen(true)}
          openLogModal={() => setLogModalOpen(true)}
        />
        <HHero styles={styles} />
        <Footer />
        {regModalOpen && (
          <RegisterModal
            setAlert={setAlert}
            handleClose={() => setRegModalOpen(false)}
          />
        )}
        {logModalOpen && (
          <LoginModal
            setRegModal={setRegModalOpen}
            setLogModal={setLogModalOpen}
            setAlert={setAlert}
            handleClose={() => setLogModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
