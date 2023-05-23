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
        className="block border-[3px] border-textColorSemiWeak rounded-md m-auto p-[10px] w-[300px] bg-inherit
        text-[15px] placeholder-[10px] placeholder-textColorWeak placeholder:text-[14px]
        autofill:shadow-autofill autofill:text-textColorSemiWeak"
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
