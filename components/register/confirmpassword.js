const ConfirmPassword = () => {
  return (
    <div className="h-fit w-fit">
      <label
        className="mb-[6px] block text-textColorSemiWeak"
        htmlFor="confirmPassword"
      >
        Confirm Password
      </label>
      <input
        className="customAutofillStyle m-auto block w-[300px] rounded-md border-[3px] border-textColorSemiWeak bg-inherit p-[10px]
        text-[15px] placeholder-[10px] placeholder-textColorWeak placeholder:text-[14px]"
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
