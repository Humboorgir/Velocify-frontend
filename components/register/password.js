const Password = () => {
  return (
    <div className="h-fit w-fit">
      <label className="mb-[6px] block text-textColorSemiWeak" htmlFor="test">
        Password
      </label>
      <input
        className="m-auto block w-[300px] rounded-md border-[3px] border-textColorSemiWeak bg-inherit p-[10px]
        text-[15px] placeholder-[10px] placeholder-textColorWeak placeholder:text-[14px]
        autofill:text-textColorSemiWeak autofill:shadow-autofill"
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
