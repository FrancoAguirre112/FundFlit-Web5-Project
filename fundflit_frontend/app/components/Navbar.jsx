"use client";

import Link from "next/link";
import SearchBar from "../components/Search";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <main>
      <nav className="mt-0 flex w-full justify-between items-center sm:py-[3rem] py-[1rem] sm:px-[2rem] px-[1.5rem] text-white font-semibold bg-Black border-b-2">
        <ul
          showNav={showNav}
          className={` ${
            showNav ? "flex" : "hidden"
          } sm:flex  sm:relative absolute sm:flex-row flex-col sm:w-[40%] w-3/9 sm:justify-start justify-center items-center text-white text-xl bg-Black w-3/4 left-0 top-0 z-10 sm:h-auto h-[30rem]`}
        >
          <li
            onClick={toggleNavbar}
            className=" cursor-pointer sm:hidden float-right absolute top-4 right-5"
          >
            <IoClose size={30} />
          </li>
          <li className="mr-6 sm:mb-0 mb-5">
            <Link href="/">About Us</Link>
          </li>
          <li className="mr-6 sm:mb-0 mb-5">
            <Link href="/fundraiser">Fundraisers</Link>
          </li>
          <li className="mr-6 sm:mb-0 mb-5">
            <Link href="/campaign">Your Campaign</Link>
          </li>
          <li>
            <button className="bg-transparent sm:hidden text-lg hover:text-white font-semibold text-greenVariant hover:bg-transparent relative -bottom-[4rem] underline">
              <Link href="/auth">SignUp/SignIn</Link>
            </button>
          </li>
        </ul>
        <CgMenuLeft
          onClick={toggleNavbar}
          size={30}
          className=" cursor-pointer sm:hidden "
        />
        <Link
          href="/"
          className="sm:w-[15%] w-3/9 sm:text-3xl sm:pl-[3rem] pl-[0] "
        >
          FUNDFLIT
        </Link>
        <div className="flex sm:w-[40%] w-3/9 justify-end items-center">
          <SearchBar />
          <div className="">
            <button className="bg-transparent text-lg sm:block hidden hover:text-white font-semibold text-greenVariant hover:bg-transparent px-[0]">
              <Link href="/auth">SignUp/SignIn</Link>
            </button>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
