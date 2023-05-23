const Email = () => {
  return (
    <div className="h-fit w-fit">
      <label className="mb-[6px] block text-textColorSemiWeak" htmlFor="email">
        Email Address
      </label>
      <input
        className="m-auto block w-[300px] rounded-md border-[3px] border-textColorSemiWeak bg-inherit p-[10px]
        text-[15px] placeholder-[10px] placeholder-textColorWeak placeholder:text-[14px]
        autofill:text-textColorSemiWeak autofill:shadow-autofill"
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
