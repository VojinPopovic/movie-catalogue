import React from "react";
import { getMovieBySearch } from "@/libs/movieSearchByName";
import { getPopularityData } from "@/libs/movieSortByPopularity";
import { getReviewsData } from "@/libs/getReviews";
import AboutPageClient from "@/components/single-use/AboutPageClient";

export default async function About({ params }) {
  const movies = await getMovieBySearch(
    params.id.split("%2B")[0].replaceAll("%20", " ")
  );
  const popularMovies = await getPopularityData();
  const reviews = await getReviewsData("moviename", params.id.split("%2B")[0]);

  return (
    <>
      <AboutPageClient
        reviews={reviews}
        movies={movies.results}
        popularMovies={popularMovies}
        movieNameYear={params.id.split("%2B")}
      />
    </>
  );
}
