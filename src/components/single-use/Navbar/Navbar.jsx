"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoIcon from "../../../../public/logoIcon.svg";
import SearchIcon from "../../../../public/searchIcon.svg";
import ProfileFallbackIcon from "../../../../public/profileFallbackIcon.svg";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();

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
          {session?.status === "authenticated" ? (
            <div className="flex gap-3">
              {/* <Image src={SearchIcon} width={30} height={30} alt=""></Image> */}
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image
                  src={session?.data.user.image}
                  width={50}
                  height={50}
                  alt=""
                ></Image>
              </div>
              <button
                className="h-[50px] text-white"
                onClick={signOut}
              >Logout</button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="bg-[#BA00FC] py-2 px-6 text-white rounded-[10px] max-w-[120px] text-center"
            >
              Sign in
            </button>
          )}
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
