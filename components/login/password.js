const Password = () => {
  return (
    <div className="w-fit h-fit">
      <label className="text-textColorSemiWeak block mb-[6px]" htmlFor="test">
        Password
      </label>
      <input
        className="block border-[3px] border-textColorSemiWeak rounded-md m-auto p-[10px] w-[300px] bg-inherit
        text-[15px] placeholder-[10px] placeholder-textColorWeak placeholder:text-[14px]
        autofill:shadow-autofill autofill:text-textColorSemiWeak"
        type="password"
        id="password"
        name="password"
        placeholder="Please enter a unique password"
        minLength="8"
        maxLength="20"
        required
      />
    </div>
  );
};

export default Password;
