import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const SocialLogin = ({ styles }) => {
  return (
    <div className={styles.socialLogin}>
      <span>Don't want to make an account? </span>
      <button>
        <FaGoogle /> Login with Google
      </button>
      <button>
        <FaGithub /> Login with Github
      </button>
      <button>
        <FaFacebook /> Login with Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
