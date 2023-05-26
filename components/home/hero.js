const HHero = () => {
  return (
    // hero
    <div className="flex h-[500px] flex-col items-center justify-center overflow-hidden">
      {/* hero text */}
      <div className="mb-12 flex flex-col items-center gap-[10px] text-center text-textColor">
        <h1
          className="m-0 bg-gradient-to-b from-gradientYellow to-gradientRed 
        bg-clip-text text-4xl font-medium text-yellow !text-transparent"
        >
          Velocify your everyday life
        </h1>
        <p className="mb-2 w-[25vw] text-textColorSemiWeak">
          Velocify provides a secure, fast and private text messenger to speed
          up your life
        </p>
        {/* button group */}
        <div className="flex w-fit flex-row justify-between gap-5">
          <a
            className="ext-xl decoration-none box-content flex h-[30px] w-[130px] items-center 
            justify-center rounded-3xl bg-gradient-to-br from-gradientYellow to-gradientOrange py-[10px]
             px-[20px] text-[20px] text-textColor"
            href="/download"
          >
            Download
          </a>
          <a
            className="decoration-none box-content flex h-[24px] w-[124px] items-center justify-center rounded-3xl 
            border-[3px] border-yellow py-[10px] px-[20px] text-[20px] text-yellow"
            href="/app"
          >
            Web app
          </a>
        </div>
      </div>
    </div>
  );
};

export default HHero;
