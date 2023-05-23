const Email = () => {
  return (
    <div className="w-fit h-fit">
      <label className="text-textColorSemiWeak block mb-[6px]" htmlFor="email">
        Email Address
      </label>
      <input
        className="block border-[3px] border-textColorSemiWeak rounded-md m-auto p-[10px] w-[300px] bg-inherit
        text-[15px] placeholder-[10px] placeholder-textColorWeak placeholder:text-[14px]
        autofill:shadow-autofill autofill:text-textColorSemiWeak"
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
