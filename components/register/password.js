const Password = () => {
  return (
    <div className="w-fit h-fit">
      <label className="text-textColorSemiWeak block mb-[6px]" htmlFor="test">
        Password
      </label>
      <input
        className="credentialsInput"
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
