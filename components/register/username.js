const Username = () => {
  return (
    <div className="h-fit w-fit">
      <label
        className="mb-[6px] block text-textColorSemiWeak"
        htmlFor="username"
      >
        Username
      </label>
      <input
        className="customAutofillStyle m-auto block w-[300px] rounded-md border-[3px] border-textColorSemiWeak bg-inherit p-[10px]
        text-[15px] placeholder-[10px] placeholder-textColorWeak placeholder:text-[14px]"
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
