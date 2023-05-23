import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const ThirdPartyLogin = () => {
  return (
    <div className="flex flex-col items-center gap-[15px] md:ml-[30px] md:mt-[10px]">
      <span className=" text-lg md:mb-[5px] md:text-base">
        Don't want to make an account?
      </span>
      <button
        className="flex h-[50px] w-[250px] cursor-pointer flex-row items-center justify-start gap-[10px]
    rounded-lg border-[2px] border-textColorSemiWeak bg-bgColorWeak py-[20px] pl-[16%] text-sm text-textColor"
      >
        <FaGoogle className="text-xl" /> Sign up with Google
      </button>
      <button
        className="flex h-[50px] w-[250px] cursor-pointer flex-row items-center justify-start gap-[10px]
    rounded-lg border-[2px] border-textColorSemiWeak bg-bgColorWeak py-[20px] pl-[16%] text-sm text-textColor"
      >
        <FaGithub className="text-xl" /> Sign up with Github
      </button>
      <button
        className="flex h-[50px] w-[250px] cursor-pointer flex-row items-center justify-start gap-[10px]
    rounded-lg border-[2px] border-textColorSemiWeak bg-bgColorWeak py-[20px] pl-[16%] text-sm text-textColor"
      >
        <FaFacebook className="text-xl" /> Sign up with Facebook
      </button>
    </div>
  );
};

export default ThirdPartyLogin;
