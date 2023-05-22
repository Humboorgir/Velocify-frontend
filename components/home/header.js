import Link from "next/link";
const HHeader = () => {
  return (
    <header className="pt-[10px] pb-[10px] h-[100px] relative flex flex-row justify-around bg-bgColorStrong">
      <div className="h-20 pl-2 relative flex flex-row content-center items-center gap-1">
        <img src="velocifyLogo.svg" alt="logo" className="h-[60px]" />
        <div
          className="text-2xl bg-gradient-to-b from-gradientYellow to-gradientRed 
        !text-transparent bg-clip-text mt-[2px]"
        >
          Velocify
        </div>
      </div>
      <ul className="w-fit relative flex flex-row flex-nowrap gap-5 list-none content-center">
        <li className="headerLI">
          <Link className="headerLIHighlighted" href="/home">
            Home
          </Link>
        </li>
        <li className="headerLI">
          <Link href="/terms">Terms of serivce</Link>
        </li>
        <li className="headerLI">
          <Link href="/download">Download</Link>
        </li>
        <li className="headerLI">
          <Link href="/support">Support</Link>
        </li>
        <li className="headerLI">
          <Link href="/articles">Articles</Link>
        </li>
      </ul>
      <div className="list-none flex flex-row justify-between items-center gap-4 w-fit">
        <Link
          className="cursor-pointer text-textColor py-2 px-5 rounded-3xl border-[3px] border-yellow decoration-none"
          href="/register"
        >
          Register
        </Link>
        <Link
          className="cursor-pointer text-textColor py-2 px-5 rounded-3xl border-[3px] border-yellow decoration-none"
          href="/login"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default HHeader;
