import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
const Return = () => {
  return (
    <Link
      href="/login"
      className="absolute left-7 top-5 hidden flex-row items-center justify-center gap-1 pb-1  pr-1
   text-textColorSemiWeak hover:border-b-2 hover:border-textColorSemiWeak md:left-12 md:top-10 md:flex">
      <MdArrowBackIosNew className="md:text-[20px]" />
      <span className="text-[18px]">Log in</span>
    </Link>
  );
};

export default Return;
