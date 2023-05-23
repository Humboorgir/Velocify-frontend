import React from "react";
import { FaUserPlus } from "react-icons/fa";
const Submit = ({ isProcessing }) => {
  return (
    <button
      type="submit"
      className="flex justify-center items-center gap-2 cursor-pointer w-[300px] text-textColor border-none
      bg-gradient-to-br from-[#e2b500] to-[#d54400] py-[10px] px-[20px] rounded-3xl overflow-hidden
      hover:scale-[1.03] active:scale-[0.97] transition-transform ease-out"
      style={{ cursor: isProcessing ? "wait" : "pointer" }}
    >
      <FaUserPlus className="text-[15px]" /> Register
    </button>
  );
};

export default Submit;
