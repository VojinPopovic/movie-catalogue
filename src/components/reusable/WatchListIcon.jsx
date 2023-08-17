import WatchlistIcon from "../../../public/watchlistIcon.svg"
import Image from "next/image";

export default function WatchListIcon() {
  return (
    <div className="absolute top-3 right-3 rounded-full p-3 hover:bg-[rgba(255,255,255,0.3)]">
      <Image src={WatchlistIcon} width={30} height={20} alt=""></Image>
    </div>
  );
}
