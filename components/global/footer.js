import { FaTwitter, FaDiscord, FaYoutube, FaGithub } from "react-icons/fa";
const HFooter = () => {
  return (
    <footer
      className="absolute bottom-0 box-border flex h-[100px] w-full 
    items-start justify-around bg-bgColorStrong pt-7 text-textColor"
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
