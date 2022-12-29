import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "../General/Backdrop";
import UsernameField from "./RFComponents/UsernameField";
import EmailField from "./RFComponents/EmailField";
import PasswordField from "./RFComponents/PasswordField";
import CPasswordField from "./RFComponents/CPasswordField";
import SocialLogin from "./RFComponents/SocialLogin";
import Agreement from "./RFComponents/Agreement";
import SubmitButton from "./RFComponents/SubmitButton";
import styles from "../../styles/Register.module.css";
const Modal = ({ setAlert, handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        initial={{
          y: "-50vh",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            type: "spring",
          },
        }}
      >
        <form
          className={styles.form}
          onSubmit={(e) => {
            handleSubmit(e, setAlert);
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
  async function handleSubmit(event, setAlert) {
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
    setAlert({
      display: true,
      ok: result.ok,
      content: result.content,
    });
    setTimeout(() => {
      setAlert({
        display: false,
        ok: null,
        content: null,
      });
    }, 3000);
  }
};
export default Modal;
