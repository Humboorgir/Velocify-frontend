import { motion } from "framer-motion";
import Backdrop from "../General/Backdrop";
import EmailField from "./LFComponents/EmailField";
import PasswordField from "./LFComponents/PasswordField";
import SubmitButton from "./LFComponents/SubmitButton";
import styles from "../../styles/Login.module.css";
const Modal = ({ setRegModal, setLogModal, setAlert, handleClose }) => {
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
            <EmailField styles={styles} />
            <PasswordField styles={styles} />
            <div className={styles.noAccount}>
              Don't have an account?{" "}
              <a
                onClick={() => {
                  setLogModal(false);
                  setRegModal(true);
                }}
              >
                Register
              </a>
            </div>
            <SubmitButton styles={styles} />
          </div>
        </form>
      </motion.div>
    </Backdrop>
  );
  async function handleSubmit(event, setAlert) {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const JSONdata = JSON.stringify(data);
    const response = await fetch("/api/login", {
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
