const ConfirmPassword = () => {
  return (
    <div className="w-fit h-fit">
      <label
        className="text-textColorSemiWeak block mb-[6px]"
        htmlFor="confirmPassword"
      >
        Confirm Password
      </label>
      <input
        className="block border-[3px] border-textColorSemiWeak rounded-md m-auto p-[10px] w-[300px] bg-inherit
        text-[15px] placeholder-[10px] placeholder-textColorWeak placeholder:text-[14px]
        autofill:shadow-autofill autofill:text-textColorSemiWeak"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Please confirm your password"
        minLength="8"
        maxLength="20"
      />
    </div>
  );
};

export default ConfirmPassword;
