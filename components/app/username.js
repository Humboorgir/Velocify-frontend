const Username = ({ username, sentByMe }) => {
  return (
    <span
      className={`mb-1 ${
        sentByMe ? "text-neutral-900" : "text-textColor"
      } hover:cursor-pointer hover:underline`}
    >
      {username}
    </span>
  );
};

export default Username;
