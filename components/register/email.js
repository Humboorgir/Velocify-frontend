const Email = () => {
  return (
    <div className="w-fit h-fit">
      <label className="text-textColorSemiWeak block mb-[6px]" htmlFor="email">
        Email Address
      </label>
      <input
        className="credentialsInput"
        type="email"
        id="email"
        name="email"
        placeholder="Please enter a valid email address"
        required
      />
    </div>
  );
};

export default Email;
