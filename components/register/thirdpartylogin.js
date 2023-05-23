import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const ThirdPartyLogin = () => {
  return (
    <div className="flex flex-col items-center gap-[15px] md:ml-[30px] md:mt-[10px]">
      <span className=" md:mb-[5px] text-lg md:text-base">
        Don't want to make an account?
      </span>
      <button className="thirdPartyLogin">
        <FaGoogle className="text-xl" /> Sign up with Google
      </button>
      <button className="thirdPartyLogin">
        <FaGithub className="text-xl" /> Sign up with Github
      </button>
      <button className="thirdPartyLogin">
        <FaFacebook className="text-xl" /> Sign up with Facebook
      </button>
    </div>
  );
};

export default ThirdPartyLogin;
