import React from "react";
import { getMovieBySearch } from "@/libs/movieSearchByName";

export default async function About({ params }) {
  let matchingMovie = "";
  const movieNameYear = params.id.split("%26");
  const movie = await getMovieBySearch(movieNameYear[0].replaceAll("%20", " "));
  movie.results.forEach((item) => {
    if (movieNameYear[1] == item.id) {
      matchingMovie = item;
    }
  });

  return <div className="text-white">{matchingMovie.backdrop_path}</div>;
}
