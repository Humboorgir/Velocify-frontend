import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const ThirdPartyLogin = () => {
  return (
    <div className="flex flex-col items-center gap-[15px] pt-1 md:ml-[30px] md:mt-[10px]">
      <button
        className="flex h-[50px] w-[250px] cursor-pointer flex-row items-center justify-start gap-[10px]
    rounded-lg border-[2px] border-textColorSemiWeak bg-bgColorWeak py-[20px] pl-[13%] text-sm text-textColor"
      >
        <FaGoogle className="text-xl" /> Login with Google
      </button>
      <button
        className="flex h-[50px] w-[250px] cursor-pointer flex-row items-center justify-start gap-[10px]
    rounded-lg border-[2px] border-textColorSemiWeak bg-bgColorWeak py-[20px] pl-[13%] text-sm text-textColor"
      >
        <FaGithub className="text-xl" /> Login with Github
      </button>
      <button
        className="flex h-[50px] w-[250px] cursor-pointer flex-row items-center justify-start gap-[10px]
    rounded-lg border-[2px] border-textColorSemiWeak bg-bgColorWeak py-[20px] pl-[13%] text-sm text-textColor"
      >
        <FaFacebook className="text-xl" /> Login with Facebook
      </button>
    </div>
  );
};

export default ThirdPartyLogin;
