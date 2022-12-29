import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const SubmitButton = ({ styles }) => {
  return (
    <motion.button
      type="submit"
      className={styles.submit}
      onClick={() => null}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaSignInAlt /> Login
    </motion.button>
  );
};

export default SubmitButton;
