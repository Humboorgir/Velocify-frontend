import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { motion } from "framer-motion";
const Submit = () => {
  return (
    <motion.button
      type="submit"
      className="flex justify-center items-center gap-2 cursor-pointer w-[300px] text-textColor border-none
      bg-gradient-to-br from-[#e2b500] to-[#d54400] py-[10px] px-[20px] rounded-3xl overflow-hidden"
      onClick={() => null}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaUserPlus className="text-[15px]" /> Register
    </motion.button>
  );
};

export default Submit;
