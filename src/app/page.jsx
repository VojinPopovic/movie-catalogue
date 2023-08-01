"use client";

import { useEffect, useState } from "react";

import MovieCard from "@/components/reusable/reusable/MovieCard";
export default function Home() {
  const [searchType, setSearchType] = useState("popularity.desc");
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          process.env.API_READ_ACCESS_TOKEN,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=${searchType}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [searchType]);

  function parameterChangeHandler(e) {
    setSearchType(e.target.value);
  }

  let content = data?.results?.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return (
    <>
      <div className="w-full flex justify-center flex-col">
        <div className="w-full h-[300px] bg-purple-200"></div>
        <div className="my-10 flex justify-center">
          <select
            name="popular"
            id=""
            className="bg-transparent text-white border-2 border-white px-4 py-2"
            onChange={parameterChangeHandler}
          >
            <option value="popularity.desc">Popularity</option>
            <option value="revenue.desc">Revenue</option>
            <option value="primary_release_date.desc">Release date</option>
            <option value="vote_average.desc">Rating</option>
          </select>
        </div>
        <div className="grid gap-5 lg:gap-10 sm:grid-cols-[318px_318px] lg:grid-cols-[318px_318px_318px] mx-auto">
          {content}
        </div>
      </div>
    </>
  );
}
