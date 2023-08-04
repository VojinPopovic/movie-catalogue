import React from "react";
import { getMovieBySearch } from "@/libs/movieSearchByName";
import Image from "next/image";
import FallbackImage from "../../../../public/fallbackImage.jpg";
import MovieCard from "@/components/reusable/reusable/MovieCard";
import { getPopularityData } from "@/libs/movieSortByPopularity";

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
      <Image src={src} width={1920} height={1080} />
      <div className="w-full h-auto">
        <div>
          <p className="">Description</p>
          <p>{matchingMovie.overview}</p>
        </div>
        <div>
          <p>Popular movies</p>
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
