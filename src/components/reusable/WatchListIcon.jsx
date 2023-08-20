"use client";

import WatchlistIcon from "../../../public/watchlistIcon.svg";
import Image from "next/image";
import { postWatchlist } from "@/libs/postWatchListItems";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function WatchListIcon({
  id,
  poster_path,
  title,
  release_date,
  vote_average,
  watchlist,
}) {
  const session = useSession();
  const router = useRouter();

  async function addToWatchlist() {
    if (watchlist.length < 1) {
      postWatchlist(
        id,
        poster_path,
        title,
        release_date,
        vote_average,
        session?.data?.user?.email
      );
      setTimeout(() => {
        router.refresh();
      }, "2000");
      router.refresh();
    } else {
      try {
        await fetch(`/api/watchlist/${watchlist[0]._id}`, { method: "DELETE" });
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div
      onClick={addToWatchlist}
      className={`absolute top-3 right-3 rounded-full p-3 ${
        !(watchlist.length < 1)
          ? "bg-[rgba(255,255,255,0.3)]"
          : "hover:bg-[rgba(255,255,255,0.3)]"
      } cursor-pointer`}
    >
      <Image src={WatchlistIcon} width={30} height={20} alt=""></Image>
    </div>
  );
}
