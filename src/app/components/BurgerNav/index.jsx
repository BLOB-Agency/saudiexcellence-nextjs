import Link from "next/link";
import React from "react";

const BurgerNav = ({ method }) => {
  return (
    <nav className="container__burgerNav text-[20px] fixed top-0 md:hidden h-[100vh] bg-black/95 z-[3] w-full  text-white flex flex-col gap-[24px] justify-center items-center transition-all duration-300  ">
      <Link
        href="#about"
        className="active:text-green active:scale-95 transition-all duration-300  "
        onClick={method}
      >
        About
      </Link>
      <Link
        href="#team"
        className="active:text-green active:scale-95 transition-all duration-300  "
        onClick={method}
      >
        Team
      </Link>
      <Link
        href="#partners"
        className="active:text-green active:scale-95 transition-all duration-300  "
        onClick={method}
      >
        Partners
      </Link>
      <Link
        href="#mission"
        className="active:text-green active:scale-95 transition-all duration-300  "
        onClick={method}
      >
        Mission
      </Link>
      <Link
        href="#portfolio"
        className="active:text-green active:scale-95 transition-all duration-300  "
        onClick={method}
      >
        Portfolio
      </Link>
      <Link
        href="#contact"
        className="active:text-green active:scale-95 transition-all duration-300  "
        onClick={method}
      >
        Contact
      </Link>
      {/* <a href="#news">AI News</a>
            <a href="#documents">Documents</a> */}
    </nav>
  );
};

export default BurgerNav;
