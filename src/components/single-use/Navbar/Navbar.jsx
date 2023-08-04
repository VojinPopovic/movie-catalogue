"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoIcon from "../../../../public/LogoIcon.svg";
import SearchIcon from "../../../../public/SearchIcon.svg";
import ProfileFallbackIcon from "../../../../public/profileFallbackIcon.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let unorderedList = (
    <>
      <Link href="/about">About</Link>
      <Link href="/new">New</Link>
      <Link href="/feedback">Feedback</Link>
    </>
  );

  return (
    <>
      <div className="relative mx-3">
        <div className="relative w-full max-w-[1034px] h-[71px] sm:h-[120px] flex items-center justify-between z-10 mx-auto">
          <Link href="/">
            <Image src={LogoIcon} width={120} height={50} alt=""></Image>
          </Link>
          <button className="bg-[#BA00FC] py-2 px-6 text-white rounded-[10px] max-w-[120px] text-center">
            Sign in
          </button>
          {/* <div className="flex gap-3">
            <Image src={SearchIcon} width={30} height={30} alt=""></Image>
            <Image src={ProfileFallbackIcon} width={50} height={50} alt=""></Image>
          </div> */}
        </div>
      </div>
      {isOpen ? (
        <div
          ref={menu}
          className="bg-orange-600 absolute w-full sm:w-1/2 h-screen flex flex-col justify-center items-center sm:items-end sm:pr-[15%] gap-10 z-[9] content-center top-0 right-0 text-4xl text-black"
        >
          {unorderedList}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
