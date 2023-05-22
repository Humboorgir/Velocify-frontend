const Agreement = () => {
  return (
    <div className="flex flex-row justify-start gap-2 items-center text-sm w-[300px]">
      <input className="mb-[1px]" type="checkbox" required /> I agree to
      Velocify's{" "}
      <a className="text-link decoration-none hover:underline" href="/terms">
        Terms of service
      </a>
    </div>
  );
};

export default Agreement;
