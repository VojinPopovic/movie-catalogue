import React from "react";
import { getMovieBySearch } from "@/libs/movieSearchByName";
import { getPopularityData } from "@/libs/movieSortByPopularity";
import { getReviewsData } from "@/libs/getReviews";
import AboutPageClient from "@/components/single-use/AboutPageClient";

export default async function About({ params }) {
  const movieNameYear = params.id.split("%2B");
  const moviesData = getMovieBySearch(movieNameYear[0].replaceAll("%20", " "));
  const popularityData = getPopularityData();
  const reviews = await getReviewsData("moviename", movieNameYear[0]);

  const [movies, popularMovies] = await Promise.all([
    moviesData,
    popularityData,
  ]);

  return (
    <>
      <AboutPageClient
        reviews={reviews}
        movies={movies.results}
        popularMovies={popularMovies}
        movieNameYear={movieNameYear}
      />
    </>
  );
}
