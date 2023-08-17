"use client";

import WatchlistIcon from "../../../public/watchlistIcon.svg";
import Image from "next/image";
import { postWatchlist } from "@/libs/postWatchListItems";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function WatchListIcon({ movieid }) {
  const session = useSession();
  const router = useRouter();

  function addToWatchlist() {
    postWatchlist(movieid, session?.data?.user?.email);
    setTimeout(() => {
      router.refresh();
    }, "2000");
  }

  return (
    <div
      onClick={addToWatchlist}
      className="absolute top-3 right-3 rounded-full p-3 hover:bg-[rgba(255,255,255,0.3)] cursor-pointer"
    >
      <Image src={WatchlistIcon} width={30} height={20} alt=""></Image>
    </div>
  );
}
