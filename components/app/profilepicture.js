import Image from "next/image";

const ProfilePicture = () => {
  return (
    <Image
      className="mt-1 h-[50px] w-[50px] rounded-full bg-neutral-500"
      src={"/images/defaultUser.svg"}
      height={40}
      width={40}
      alt="user profile picture"
    />
  );
};

export default ProfilePicture;
