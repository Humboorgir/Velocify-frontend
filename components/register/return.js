import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
const Return = () => {
  return (
    <Link
      href="/"
      className="hidden md:flex flex-row text-textColorSemiWeak items-center justify-center gap-1 absolute md:left-12  md:top-10
   left-7 top-5 hover:border-b-2 hover:border-textColorSemiWeak pb-1 pr-1"
    >
      <MdArrowBackIosNew className="md:text-[20px]" />
      <span className="text-[18px]">Go back</span>
    </Link>
  );
};

export default Return;
