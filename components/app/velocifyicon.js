const VelocifyIcon = () => {
  return (
    /* // image box container */
    <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-4">
      {/* image container */}
      <div
        className="relative before:absolute before:top-0 
                before:left-0 before:h-full before:w-full before:rounded-full before:bg-gray-400
                 before:mix-blend-multiply before:content-['']"
      >
        <img
          src="/velocifyLogo.svg"
          className="h-40 opacity-80 brightness-[40%] grayscale"
        ></img>
      </div>
      {/* text  */}
      <span className="brightness-[60%] grayscale">
        Select a channel to get started
      </span>
    </div>
  );
};

export default VelocifyIcon;
