import CloseModalIcon from "../../../public/closeModal.svg";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "../../../public/searchIcon.svg";
import { signOut } from "next-auth/react";

export default function ProfileModal({ setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  let unorderedList = (
    <>
      <Link onClick={closeModal} href="/">
        Home
      </Link>
      <Link onClick={closeModal} href="/watch-list">
        Watch List
      </Link>
      <Link onClick={closeModal} href="/profile">
        Profile
      </Link>
      <Link onClick={closeModal} href="/comments">
        Comments
      </Link>
      <li onClick={signOut} className="list-none cursor-pointer">
        Logout
      </li>
    </>
  );

  return (
    <div className="fixed w-screen h-screen bg-[#100F12] z-[1000] top-0 left-0">
      {/* <Image src={SearchIcon} width={30} height={30} alt=""></Image> */}
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
        <div className="w-[300px] h-[40px] border-white border-[3px] border-solid rounded-full flex items-center pl-2">
          <Image src={SearchIcon} width={20} height={20} alt=""></Image>
          <input
            type="text"
            className="w-full h-full text-base pl-2"
            placeholder="Search"
          />
        </div>
        {unorderedList}
      </div>
    </div>
  );
}
