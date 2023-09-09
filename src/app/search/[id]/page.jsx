import { getMovieBySearch } from "@/libs/movieSearchByName";
import MovieCard from "@/components/reusable/MovieCard";

export default async function Search({ params }) {
  const searchResults = await getMovieBySearch(params.id);

  const content = searchResults.results.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} dataFilter="release" />;
  });

  return (
    <div className="text-white w-full max-w-[1048px] flex flex-col justify-center">
      <p className="text-4xl text-center mt-5 mb-10">Search results</p>
      {searchResults?.results?.length >= 1 ? (
        <div className="grid gap-3 xxs:grid-cols-[250px] xs:grid-cols-[200px_200px] sm:grid-cols-[200px_200px_200px] md:grid-cols-[200px_200px_200px_200px] content:grid-cols-[200px_200px_200px_200px_200px] content:gap-3 mx-auto pb-10">
          {content}
        </div>
      ) : (
        <p className="text-2xl text-center">No results</p>
      )}
    </div>
  );
}
