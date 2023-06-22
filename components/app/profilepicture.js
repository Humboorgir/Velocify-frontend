import Image from "next/image";

const ProfilePicture = ({ sentByMe }) => {
  return (
    /* display the profile picture only if the message is NOT sent by me  */
    !sentByMe && (
      <Image
        className={`h-[50px] w-[50px] rounded-full bg-neutral-500`}
        src={"/images/defaultUser.svg"}
        height={40}
        width={40}
        alt="user profile picture"
      />
    )
  );
};

export default ProfilePicture;
