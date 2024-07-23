import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-start items-center gap-1">
      <Image
        src="/assets/icons/logo-icon.svg"
        alt="Logo"
        width={32}
        height={32}
        className=""
      />
      <p className="hidden md:block">DocSync</p>
    </div>
  );
};

export default Logo;
