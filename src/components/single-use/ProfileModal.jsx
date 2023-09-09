"use client";

import CloseModalIcon from "../../../public/closeModal.svg";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "../../../public/searchIcon.svg";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfileModal({ setIsOpen, session }) {
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function submitHandler(e) {
    e.preventDefault();
    router.push(`/search/${e.target[0].value}`);
    e.target.reset();
    setIsOpen(false)
  }

  let unorderedList = (
    <>
      <Link onClick={closeModal} href="/">
        Home
      </Link>
      <Link
        onClick={closeModal}
        href={`/watch-list/${encodeURI(session.data.user.email)}`}
      >
        Watch List
      </Link>
      <Link
        onClick={closeModal}
        href={`/reviews/${encodeURI(session.data.user.email)}`}
      >
        Reviews
      </Link>
      <li onClick={signOut} className="list-none cursor-pointer">
        Logout
      </li>
    </>
  );

  return (
    <div className="fixed w-screen h-screen bg-[#100F12] z-[1000] top-0 left-0">
      <div className="w-full flex justify-end pr-[50px] pt-[50px]">
        <Image
          onClick={() => setIsOpen(false)}
          className=""
          src={CloseModalIcon}
          width={30}
          height={30}
          alt=""
        ></Image>
      </div>
      <div className="w-full h-[calc(100vh-200px)] flex flex-col text-white text-3xl justify-center gap-10 text-center items-center">
        <div className="w-[300px] h-[40px] border-white border border-solid rounded-full flex items-center pl-2">
          <Image src={SearchIcon} width={20} height={20} alt=""></Image>
          <form onSubmit={submitHandler} className="relative w-full h-full">
            <input
              type="text"
              className="absolute top-0 left-0 w-full h-full text-base pl-2"
              placeholder="Search"
            />
          </form>
        </div>
        {unorderedList}
      </div>
    </div>
  );
}
