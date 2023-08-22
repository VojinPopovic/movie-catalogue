import { getWatchListItems } from "@/libs/getWatchListItems";
import MovieCard from "@/components/reusable/MovieCard";

export default async function WatchList({ params }) {
  const watchlist = await getWatchListItems(
    "useremail",
    decodeURI(params.id).replaceAll("%40", "@")
  );
  console.log(watchlist);

  const content = watchlist.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return (
    <div className="text-white max-w-[1034px] mx-auto px-2">
      <p className="text-white text-4xl my-5">Watchlist</p>
      <div className="grid gap-3 xxs:grid-cols-[250px] xs:grid-cols-[200px_200px] sm:grid-cols-[200px_200px_200px] md:grid-cols-[200px_200px_200px_200px] content:grid-cols-[200px_200px_200px_200px_200px] content:gap-3 mx-auto pb-10">
        {watchlist ? content : ""}
      </div>
    </div>
  );
}
