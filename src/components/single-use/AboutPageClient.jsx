"use client";

import { useEffect, useState } from "react";
import GlassCard from "./GlassCard";
import Review from "./Review";
import MovieCard from "../reusable/MovieCard";
import Image from "next/image";
import FallbackImage from "../../../public/fallbackImage.jpg";

export default function AboutPageClient({
  reviews,
  movies,
  popularMovies,
  movieNameYear,
}) {
  const [matchingMovie, setMatchingMovie] = useState("");
  const [src, setSrc] = useState("");
  console.log(matchingMovie);

  console.log(movieNameYear);

  useEffect(() => {
    const link = "https://image.tmdb.org/t/p/original";
    setSrc(
      matchingMovie.backdrop_path !== null
        ? link + matchingMovie.backdrop_path
        : FallbackImage
    );
    movies.forEach((movie) => {
      console.log(movie.id);
      if (movieNameYear[1] == movie.id) {
        setMatchingMovie(movie);
      }
    });
  }, [movies, matchingMovie]);

  return (
    <>
      <div className="text-white max-w-[1034px] mx-auto">
        <div className="w-full h-full relative">
          <Image src={src} width={1920} height={1080} alt="" />
          <div className="h-full sm:h-auto flex justify-center items-center absolute bottom-0 sm:justify-start sm:mb-4 px-3 w-full md:justify-center">
            <div className="grid xs:gap-2 md:gap-5 md:grid-cols-[200px_200px_200px]">
              <GlassCard prop={movies[0]?.title} />
              <GlassCard date={movies[0]?.release_date} />
              <GlassCard prop={"Rating: " + movies[0]?.vote_average} />
            </div>
          </div>
        </div>
        <div className="w-full h-auto">
          <div className="mx-2 content:mx-0">
            <p className="text-[#BA00FC] my-4 text-2xl">Description</p>
            <p>{matchingMovie?.overview}</p>
          </div>
          <Review
            reviews={reviews}
            moviename={movieNameYear[0].replaceAll("%20", " ")}
            movieid={matchingMovie.id}
          />
          <div>
            <p className="text-[#BA00FC] my-4 text-2xl mx-2 content:mx-0">
              Popular movies
            </p>
            <div className="w-full flex justify-center">
              <div className="grid gap-10 md:grid-cols-[318px_318px] lg:grid-cols-[318px_318px_318px] mx-auto">
                {popularMovies.results.map((item) => {
                  return <MovieCard key={item.id} movie={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
