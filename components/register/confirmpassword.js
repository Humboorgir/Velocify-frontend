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
        className="credentialsInput"
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
