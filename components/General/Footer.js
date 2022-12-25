import { FaTwitter, FaDiscord, FaYoutube, FaGithub } from "react-icons/fa";

const HFooter = ({ styles }) => {
  return (
    <footer>
      <span>
        example@gmail.com
        <br />
        +99 999 999 9999
      </span>
      <span>Copyright &copy; 2022 Velocify, All rights reserved.</span>
      <span>
        <FaTwitter />
        <FaDiscord />
        <FaYoutube />
        <FaGithub />
      </span>
    </footer>
  );
};

export default HFooter;
