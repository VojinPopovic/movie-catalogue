"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoIcon from "../../../../public/logoIcon.svg";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import ProfileModal from "../ProfileModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();

  return (
    <>
      <div className="mx-3 z-[200]">
        <div className="w-full max-w-[1034px] h-[71px] sm:h-[120px] flex items-center justify-between mx-auto">
          <Link href="/">
            <Image src={LogoIcon} width={120} height={50} alt=""></Image>
          </Link>
          {session?.status === "authenticated" ? (
            <div className="flex gap-3">
              <div
                onClick={() => setIsOpen(true)}
                className="w-[50px] h-[50px] rounded-full overflow-hidden"
              >
                <Image
                  src={session?.data.user.image}
                  width={50}
                  height={50}
                  alt=""
                ></Image>
              </div>
              <button className="h-[50px] text-white" onClick={signOut}>
                Logout
              </button>
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
      {isOpen ? <ProfileModal setIsOpen={setIsOpen} /> : ""}
    </>
  );
}
