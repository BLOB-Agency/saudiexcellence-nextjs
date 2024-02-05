"use client";
import React, { useState } from "react";
import BurgerNav from "../BurgerNav";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleBtn() {
    setIsOpen(!isOpen);
  }

  return (
    <header
      className="z-[6] fixed w-full  pt-[20px] px-[20px] grid grid-cols-4 md:grid-cols-12 md:gap-[24px] items-center "
      style={{
        background:
          "linear-gradient(180deg, rgba(30, 30, 30, 0.9) 0%, rgba(30, 30, 30, 0) 100%)",
      }}
    >
      <button
        className={` nav-icon flex md:hidden flex-col gap-[5px] w-[45px] relative  col-span-1 transition-all duration-300 z-[4] ${
          isOpen ? "justify-center items-center relative " : ""
        }`}
        onClick={toggleBtn}
      >
        <span
          className={`h-[2px] w-full rounded-full transition-all duration-300 ${
            isOpen ? "-rotate-45 bg-green absolute" : "bg-white"
          }`}
        ></span>
        <span
          className={`h-[2px] w-full rounded-full  ${
            isOpen ? "opacity-0 h-[30px]" : "bg-white"
          }`}
        ></span>
        <span
          className={`h-[2px] w-full rounded-full transition-all duration-300 ${
            isOpen ? "rotate-45 bg-green absolute" : "bg-white"
          }`}
        ></span>
      </button>
      <div className="container__header-title flex justify-center col-span-2 md:col-span-2 ">
        <img
          className=" w-[70px] md:w-[100px] "
          src="/assets/Logo_SEC.png"
          alt="Saudi Excellence Co."
        />
      </div>
      <nav className="container__header-nav hidden md:flex md:col-start-5 md:col-span-6  text-white md:justify-between ">
        <Link
          href="#about"
          className="hover:text-green active:scale-95 transition-all duration-300 "
        >
          About
        </Link>
        <Link
          href="#mission"
          className="hover:text-green active:scale-95 transition-all duration-300 "
        >
          Mission
        </Link>
        <Link
          href="#partners"
          className="hover:text-green active:scale-95 transition-all duration-300 "
        >
          Partners
        </Link>
        <Link
          href="#team"
          className="hover:text-green active:scale-95 transition-all duration-300 "
        >
          Team
        </Link>
        <Link
          href="#portfolio"
          className="hover:text-green active:scale-95 transition-all duration-300 "
        >
          Portfolio
        </Link>
      </nav>
      <button className="container__header-btn ring-[1px] ring-green rounded-full text-green py-[6px] col-span-[1] md:col-span-2 hover:bg-black/30 active:scale-95 transition-all duration-300 ">
        <Link href="#contact" className="block">
          Contact
        </Link>
      </button>
      {isOpen ? <BurgerNav method={toggleBtn} /> : ""}
    </header>

  );
};

export default Header;
