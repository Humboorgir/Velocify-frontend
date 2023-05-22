import { motion } from "framer-motion";
const alert = ({ alert }) => {
  return (
    <>
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
    </>
  );
};

export default alert;
