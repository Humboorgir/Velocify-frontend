import Username from "@/components/register/username";
import Email from "@/components/register/email";
import Password from "@/components/register/password";
import ConfirmPassword from "@/components/register/confirmpassword";
import Agreement from "@/components/register/agreement";
import Submit from "@/components/register/submit";

const CredentialsLogin = ({ isProcessing }) => {
  return (
    <div
      className="w-[90%] md:w-fit pb-8 md:pr-8 border-b-[3px] border-b-yellowStrong md:border-r-[3px] md:border-r-yellowStrong 
  md:border-b-0 relative flex flex-col flex-wrap justify-center items-center gap-x-8 gap-y-4"
    >
      <Username />
      <Email />
      <Password />
      <ConfirmPassword />
      <Agreement />
      <Submit isProcessing={isProcessing} />
    </div>
  );
};

export default CredentialsLogin;
