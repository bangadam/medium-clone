import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AccountDropdown from "./AccountDropdown";
import Button from "./Button";

type Props = {};

const Navbar: React.FC<Props> = () => {
  const [keyword, setKeyword] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isLoggedIn = true;

  return (
    <header className="px-24 h-16 border-b border-slate-200 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/images/logo-with-text.svg"
          alt="logo-with-text"
          width={146}
          height={42}
        />
      </Link>
      <div className="w-[720px] absolute left-1/2 -translate-x-1/2 flex items-center">
        <Image
          src="/images/search.svg"
          alt="search"
          width={24}
          height={24}
          className="mr-4"
        />
        <input
          className="w-full font-sans text-sm placeholder-slate-400 outline-none"
          placeholder="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      {isLoggedIn && (
        <div className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Image
              src="/images/author.png"
              alt="user"
              width={"40"}
              height={"40"}
            />
          </button>

          {isDropdownOpen && <AccountDropdown />}
        </div>
      )}
      {!isLoggedIn && (
        <Link href="/auth/sign-in">
          <Button isShadow>Sign In</Button>
        </Link>
      )}
    </header>
  );
};

export default Navbar;
