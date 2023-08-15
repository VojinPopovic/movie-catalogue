import React from "react";
import { getPopularityData } from "@/libs/movieSortByPopularity";
import { getReviewsData } from "@/libs/getReviews";
import AboutPageClient from "@/components/single-use/AboutPageClient";

export default async function About({ params }) {
  const popularMovies = getPopularityData();
  const reviews = await getReviewsData("moviename", params.id.split("%2B")[0]);

  return (
    <>
      <AboutPageClient
        reviews={reviews}
        popularMovies={popularMovies}
        movieNameYear={params.id.split("%2B")}
        params={params}
      />
    </>
  );
}
