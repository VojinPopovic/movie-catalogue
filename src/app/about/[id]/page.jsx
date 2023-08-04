import React from "react";
import { getMovieBySearch } from "@/libs/movieSearchByName";
import Image from "next/image";
import FallbackImage from "../../../../public/fallbackImage.jpg";
import MovieCard from "@/components/reusable/reusable/MovieCard";
import { getPopularityData } from "@/libs/movieSortByPopularity";
import GlassCard from "@/components/reusable/single-use/GlassCard";
import { formatDate } from "@/libs/formatDate";

export default async function About({ params }) {
  let matchingMovie = "";
  const link = "https://image.tmdb.org/t/p/original";
  const movieNameYear = params.id.split("%26");
  const movies = await getMovieBySearch(
    movieNameYear[0].replaceAll("%20", " ")
  );
  const popularMovies = await getPopularityData();
  movies.results.forEach((item) => {
    if (movieNameYear[1] == item.id) {
      matchingMovie = item;
    }
  });
  console.log(matchingMovie);
  const src =
    matchingMovie.backdrop_path !== null
      ? link + matchingMovie.backdrop_path
      : FallbackImage;

  return (
    <div className="text-white max-w-[1034px] mx-auto">
      <div className="w-full h-full relative">
        <Image src={src} width={1920} height={1080} alt="" />
        <div className="h-full sm:h-auto flex justify-center items-center absolute bottom-0 sm:justify-start sm:mb-4 px-3 w-full md:justify-center">
          <div className="grid xs:gap-2 md:gap-5 md:grid-cols-[200px_200px_200px]">
            <GlassCard prop={matchingMovie.title} />
            <GlassCard prop={formatDate(matchingMovie.release_date)} />
            <GlassCard prop={"Rating: " + matchingMovie.vote_average} />
          </div>
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="mx-2 content:mx-0">
          <p className="text-[#BA00FC] my-4 text-2xl">Description</p>
          <p>{matchingMovie.overview}</p>
        </div>
        <div>
          <p className="text-[#BA00FC] my-4 text-2xl mx-2 content:mx-0">Popular movies</p>
          <div className="w-full flex justify-center">
            <div className="grid gap-10 md:grid-cols-[318px_318px] lg:grid-cols-[318px_318px_318px] mx-auto">
              {popularMovies.results.map((item) => {
                return <MovieCard movie={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
