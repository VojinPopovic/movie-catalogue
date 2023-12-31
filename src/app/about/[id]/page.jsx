import React from "react";
import { getPopularityData } from "@/libs/movieSortByPopularity";
import { getReviewsData } from "@/libs/getReviews";
import Review from "@/components/single-use/Review";
import { getMovieBySearch } from "@/libs/movieSearchByName";
import Image from "next/image";
import FallbackImage from "../../../../public/fallbackImage.jpg";
import GlassCard from "@/components/single-use/GlassCard";
import MovieCard from "@/components/reusable/MovieCard";
import WatchListIcon from "@/components/reusable/WatchListIcon";
import { getWatchListItems } from "@/libs/getWatchListItems";

export default async function About({ params }) {
  let matchingMovie = "";
  const popularMoviesData = getPopularityData();
  const reviewsData = getReviewsData("moviename", params.id.split("%2B")[0]);
  const moviesData = getMovieBySearch(params.id.split("%2B")[0]);
  const watchlistData = getWatchListItems("id", params.id.split("%2B")[1]);
  const movieNameAndId = params.id.split("%2B");
  let src = "";
  const link = "https://image.tmdb.org/t/p/original";

  const [movies, popularMovies, reviews, watchlist] = await Promise.all([
    moviesData,
    popularMoviesData,
    reviewsData,
    watchlistData,
  ]);

  if (movies) {
    movies.results.forEach((movie) => {
      if (movieNameAndId[1] == movie.id) {
        matchingMovie = movie;
        src = link + matchingMovie.backdrop_path;
      }
    });
  }

  return (
    <>
      <div className="text-white max-w-[1048px] mx-auto">
        <div className="w-full h-full relative">
          <Image
            src={matchingMovie.backdrop_path !== null ? src : FallbackImage}
            width={1920}
            height={1080}
            alt=""
          />
          <WatchListIcon
            id={matchingMovie.id}
            poster_path={matchingMovie.poster_path}
            title={matchingMovie.title}
            release_date={matchingMovie.release_date}
            vote_average={matchingMovie.vote_average}
            watchlist={watchlist}
          />
          <div className="h-full sm:h-auto flex justify-center items-center absolute bottom-0 sm:justify-start sm:mb-4 px-3 w-full md:justify-center">
            <div className="grid xs:gap-2 md:gap-5 md:grid-cols-[200px_200px_200px]">
              <GlassCard prop={movies.results[0].title} />
              <GlassCard date={movies.results[0].release_date} />
              <GlassCard prop={"Rating: " + movies.results[0].vote_average} />
            </div>
          </div>
        </div>
        <div className="w-full h-auto">
          <div className="mx-2 content:mx-0">
            <p className="text-[#BA00FC] my-4 text-2xl">Description</p>
            <p>{matchingMovie.overview}</p>
          </div>
          <Review
            reviews={reviews}
            moviename={movieNameAndId[0].replaceAll("%20", " ")}
            movieid={matchingMovie.id}
          />
          <div>
            <p className="text-[#BA00FC] my-4 text-2xl mx-2 content:mx-0">
              Popular movies
            </p>
            <div className="w-full flex justify-center">
              <div className="grid gap-3 xxs:grid-cols-[250px] xs:grid-cols-[200px_200px] sm:grid-cols-[200px_200px_200px] md:grid-cols-[200px_200px_200px_200px] content:grid-cols-[200px_200px_200px_200px_200px] content:gap-3 mx-auto pb-10">
                {popularMovies?.results?.map((item) => {
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
