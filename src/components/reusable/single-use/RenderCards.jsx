import React from 'react'
import MovieCard from '../reusable/MovieCard'
import { getData } from '@/libs/movieSortData'

export default async function RenderCards() {
  const movies = await getData("popular.desc");
  console.log(movies.results);
  const content = movies.results.map((movie) => {
    return <MovieCard movie={movie}  />;
  });
  return (
    <>
      <div className="w-full flex justify-center flex-col">
        <div className="w-full h-[300px] bg-purple-200"></div>
        <div className="my-10 flex justify-center">
          <select name="popular" id="" className="bg-transparent text-white border-2 border-white px-4 py-2">
            <option value="popularity.desc">Popularity</option>
            <option value="revenue.desc">Revenue</option>
            <option value="release_date.desc">Release date</option>
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
