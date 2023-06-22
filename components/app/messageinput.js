import { RiSendPlaneFill } from "react-icons/ri";

import { useRouter } from "next/router";

const MessageInput = ({ messageCreate }) => {
  const router = useRouter();
  // true if the user is NOT on /app
  const showInput = router.pathname !== "/app";
  return (
    showInput && (
      <form
        className="mt-auto mb-4 flex h-fit flex-row items-center
     justify-center bg-inherit pt-1 md:mx-6"
        onSubmit={messageCreate}
      >
        <input
          placeholder="Message"
          className="h-12 w-[75%] rounded-l-full bg-[#282b30] px-6 md:w-[70%]"
          name="message"
          maxLength={1000}
          autoComplete="off"
        />
        <button
          className="h-12 w-fit rounded-r-full bg-[#282b30] p-3 pr-6
        text-2xl text-yellow"
        >
          <RiSendPlaneFill />
        </button>
      </form>
    )
  );
};

export default MessageInput;
