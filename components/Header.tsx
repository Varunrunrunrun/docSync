import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="flex justify-start items-center gap-1">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className=""
        />
        <p className="hidden md:block">DocSync</p>
      </Link>
      {children}
    </div>
  );
};

export default Header;
