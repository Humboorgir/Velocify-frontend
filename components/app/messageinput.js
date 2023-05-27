const MessageInput = () => {
  return (
    <form className="absolute bottom-1 flex h-[14%] w-[93.5%] flex-row items-center bg-bgColor">
      <input
        placeholder="Message Person 2"
        className="h-12 w-[90%] bg-[#282b30] px-4"
      />
      <button className="h-12 w-[12%] rounded-r-md bg-yellowStrong p-3">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
