import { motion } from "framer-motion";
import { useState } from "react";
import Backdrop from "../General/Backdrop";
import UsernameField from "./RFComponents/UsernameField";
import EmailField from "./RFComponents/EmailField";
import PasswordField from "./RFComponents/PasswordField";
import CPasswordField from "./RFComponents/CPasswordField";
import SocialLogin from "./RFComponents/SocialLogin";
import Agreement from "./RFComponents/Agreement";
import SubmitButton from "./RFComponents/SubmitButton";
import styles from "../../styles/Register.module.css";
import { FaExclamationTriangle } from "react-icons/fa";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 40,
      stiffness: 300,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const alertDropIn = {
  hidden: {
    y: "-100vh",
    x: "-50%",
    opacity: 0,
  },
  visible: {
    y: "-50%",
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 30,
      stiffness: 400,
    },
  },
  exit: {
    y: "100vh",
    x: "-50%",
    opacity: 0,
  },
};
const Modal = ({ handleClose }) => {
  const [modal2, setModal2] = useState({
    display: false,
    ok: false,
    content: "",
  });
  return (
    <Backdrop onClick={handleClose}>
      {modal2.display && (
        <motion.div
          variants={alertDropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="alert"
          style={
            modal2.ok
              ? { color: "#baffc3", backgroundColor: "#27a800" }
              : { color: "#f8d7da", backgroundColor: "#ab0011" }
          }
        >
          <strong>
            <FaExclamationTriangle /> {modal2.ok ? "SUCCESS!" : "ERROR!"}:
          </strong>
          {modal2.content}
        </motion.div>
      )}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <form
          className={styles.form}
          onSubmit={async (event) => {
            event.preventDefault();
            const data = {
              username: event.target.username.value,
              email: event.target.email.value,
              password: event.target.password.value,
              confirmPassword: event.target.confirmPassword.value,
            };
            const JSONdata = JSON.stringify(data);
            const response = await fetch("/api/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSONdata,
            });
            const result = await response.json();
            console.log(result);
            setModal2({
              display: true,
              ok: result.ok,
              content: result.content,
            });
          }}
        >
          <div className={styles.localLogin}>
            <UsernameField styles={styles} />
            <EmailField styles={styles} />
            <PasswordField styles={styles} />
            <CPasswordField styles={styles} />
            <Agreement styles={styles} />
            <SubmitButton styles={styles} />
          </div>
          <SocialLogin styles={styles} />
        </form>
      </motion.div>
    </Backdrop>
  );
};
export default Modal;
