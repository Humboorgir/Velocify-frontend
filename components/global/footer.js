import { FaTwitter, FaDiscord, FaYoutube, FaGithub } from "react-icons/fa";
const HFooter = () => {
  return (
    <footer
      className="box-border absolute w-full h-[100px] bottom-0 flex 
    justify-around items-start pt-7 bg-bgColorStrong text-textColor"
    >
      <span>
        example@gmail.com
        <br />
        +99 999 999 9999
      </span>
      <span>Copyright &copy; 2022 Velocify, All rights reserved.</span>
      <span className="flex flex-row gap-5 text-xl">
        <FaTwitter />
        <FaDiscord />
        <FaYoutube />
        <FaGithub />
      </span>
    </footer>
  );
};

export default HFooter;
