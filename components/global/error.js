const Error = ({ error }) => {
  return (
    <div
      className="absolute top-0 left-0 right-0 z-10 flex flex-col justify-center bg-red-300
     p-2.5 text-red-900 sm:flex-row sm:text-lg">
      <strong className="mr-2 font-bold">{error.title}</strong> {error.description}
    </div>
  );
};

export default Error;
