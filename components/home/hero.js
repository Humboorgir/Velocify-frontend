const HHero = () => {
  return (
    // hero
    <div className="flex flex-col items-center justify-center overflow-hidden h-[500px]">
      {/* hero text */}
      <div className="flex flex-col gap-[10px] items-center text-center text-textColor mb-12">
        {/* <h1 className="text-textColor text-6xl font-medium m-0">
          V E L O C I F Y
        </h1>
        bg-gradient-to-b from-gradientYellow to-gradientRed !text-transparent bg-clip-text
        text-4xl
        */}
        <h1
          className="text-yellow text-4xl font-medium m-0 
        bg-gradient-to-b from-gradientYellow to-gradientRed !text-transparent bg-clip-text"
        >
          Velocify your everyday life
        </h1>
        <p className="text-textColorSemiWeak mb-2 w-[25vw]">
          Velocify provides a secure, fast and private text messenger to speed
          up your life
        </p>
        {/* button group */}
        <div className="flex flex-row gap-5 justify-between w-fit">
          <a
            class="flex justify-center items-center ext-xl decoration-none w-[130px] h-[30px] 
            py-[10px] px-[20px] box-content text-[20px] bg-gradient-to-br from-gradientYellow
             to-gradientOrange text-textColor rounded-3xl"
            href="/download"
          >
            Download
          </a>
          <a
            className="flex justify-center items-center w-[124px] h-[24px] decoration-none py-[10px] px-[20px] 
            border-[3px] border-yellow text-yellow rounded-3xl box-content text-[20px]"
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
