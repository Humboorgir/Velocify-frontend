const MessageInput = () => {
  return (
    <form className="absolute bottom-4 flex w-[93%] flex-row">
      <input
        placeholder="Message Person 2"
        className="w-[90%] bg-[#282b30] px-4"
      />
      <button className="w-[12%] rounded-r-md bg-yellowStrong p-3">Send</button>
    </form>
  );
};

export default MessageInput;
