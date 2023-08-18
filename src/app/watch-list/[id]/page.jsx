import { getWatchListItems } from "@/libs/getWatchListItems";

export default async function WatchList({ params }) {
  const watchlist = await getWatchListItems(
    "useremail",
    decodeURI(params.id).replaceAll("%40", "@")
  );
  console.log(watchlist)

  return <div className="w-full max-w-[1048px] bg-white"></div>;
}
