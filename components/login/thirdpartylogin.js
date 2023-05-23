import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const ThirdPartyLogin = () => {
  return (
    <div className="flex flex-col items-center gap-[15px] md:ml-[30px] md:mt-[10px]">
      <span className=" md:mb-[5px] text-lg md:text-base">
        Don't want to make an account?
      </span>
      <button
        className="flex flex-row items-center justify-start cursor-pointer gap-[10px] text-textColor text-sm
    bg-bgColorWeak border-[2px] border-textColorSemiWeak py-[20px] pl-[16%] rounded-lg w-[250px] h-[50px]"
      >
        <FaGoogle className="text-xl" /> Sign up with Google
      </button>
      <button
        className="flex flex-row items-center justify-start cursor-pointer gap-[10px] text-textColor text-sm
    bg-bgColorWeak border-[2px] border-textColorSemiWeak py-[20px] pl-[16%] rounded-lg w-[250px] h-[50px]"
      >
        <FaGithub className="text-xl" /> Sign up with Github
      </button>
      <button
        className="flex flex-row items-center justify-start cursor-pointer gap-[10px] text-textColor text-sm
    bg-bgColorWeak border-[2px] border-textColorSemiWeak py-[20px] pl-[16%] rounded-lg w-[250px] h-[50px]"
      >
        <FaFacebook className="text-xl" /> Sign up with Facebook
      </button>
    </div>
  );
};

export default ThirdPartyLogin;
