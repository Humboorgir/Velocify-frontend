const Agreement = () => {
  return (
    <div className="flex w-[300px] flex-row items-center justify-start gap-2 text-sm">
      <input className="mb-[1px]" type="checkbox" required /> I agree to
      Velocify's{" "}
      <a className="decoration-none text-link hover:underline" href="/terms">
        Terms of service
      </a>
    </div>
  );
};

export default Agreement;
