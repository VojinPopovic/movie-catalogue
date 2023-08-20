import { getWatchListItems } from "@/libs/getWatchListItems";
import MovieCard from "@/components/reusable/MovieCard";

export default async function WatchList({ params }) {
  const watchlist = await getWatchListItems(
    "useremail",
    decodeURI(params.id).replaceAll("%40", "@")
  );

  return <div className="w-full max-w-[1048px] bg-white">{
    // watchlist? 

  }</div>;
}
