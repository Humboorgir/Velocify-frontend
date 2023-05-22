const Username = () => {
  return (
    <div className="w-fit h-fit">
      <label
        className="text-textColorSemiWeak block mb-[6px]"
        htmlFor="username"
      >
        Username
      </label>
      <input
        className="credentialsInput"
        type="text"
        id="username"
        name="username"
        placeholder="Please enter the username of your choice"
        minLength="3"
        maxLength="16"
        required
      />
    </div>
  );
};

export default Username;
