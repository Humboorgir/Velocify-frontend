import React from "react";
import { FaUserPlus } from "react-icons/fa";
const Submit = ({ isProcessing }) => {
  return (
    <button
      type="submit"
      className="mt-2 flex w-[300px] cursor-pointer items-center justify-center gap-2 overflow-hidden
      rounded-3xl border-none bg-gradient-to-br from-[#e2b500] to-[#d54400] py-[10px] px-[20px]
      text-textColor transition-transform ease-out hover:scale-[1.03] active:scale-[0.97]"
      style={{ cursor: isProcessing ? "wait" : "pointer" }}
    >
      <FaUserPlus className="text-[15px]" /> Register
    </button>
  );
};

export default Submit;
