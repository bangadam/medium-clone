import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

type Props = {};

const Navbar: React.FC<Props> = () => {
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
      <Link href="/auth/sign-in">
        <Button isShadow>Sign In</Button>
      </Link>
    </header>
  );
};

export default Navbar;
