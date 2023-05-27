const MessageInput = () => {
  return (
    <form className="absolute bottom-0 left-0 flex h-fit w-full flex-row items-center bg-bgColor md:bottom-1 md:left-auto md:h-[12%] md:w-[93.5%]">
      <input
        placeholder="Message Person 2"
        className="h-12 w-[90%] bg-[#282b30] px-4"
      />
      <button className="h-12 w-[max(12%,80px)] rounded-r-md bg-yellowStrong p-3">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
