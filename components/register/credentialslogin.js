import Username from "@/components/register/username";
import Email from "@/components/register/email";
import Password from "@/components/register/password";
import ConfirmPassword from "@/components/register/confirmpassword";
import Agreement from "@/components/register/agreement";
import Submit from "@/components/register/submit";

const CredentialsLogin = ({ isProcessing }) => {
  return (
    <div
      className="relative flex w-[90%] flex-col flex-wrap items-center justify-center gap-x-8 
  gap-y-4 border-b-[3px] border-b-yellowStrong pb-8 md:w-fit md:border-r-[3px] md:border-b-0 md:border-r-yellowStrong md:pr-8"
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
