"use client";

import React from "react";
import MovieCard from "../reusable/MovieCard";
import { useState, useEffect } from "react";
import BasicSlider from "./BasicSlider";

export default function RenderCards({ dataList }) {
  const [filteredData, setFilteredData] = useState(dataList.popularity);
  function dataPicker(e) {
    setFilteredData(dataList[e.target.value]);
  }

  const content = filteredData.results.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });
  return (
    <>
      <div className="w-full flex justify-center flex-col">
        <div className="w-full h-[400px] bg-black">
          <BasicSlider data={dataList.popularity.results}></BasicSlider>
        </div>
        <div className="my-10 flex justify-center">
          <select
            name="popular"
            id=""
            className="bg-transparent text-white border-2 border-white px-4 py-2"
            onChange={dataPicker}
          >
            <option value="popularity">Popularity</option>
            <option value="revenue">Revenue</option>
            <option value="release">Release date</option>
            <option value="votes">Rating</option>
          </select>
        </div>
        <div className="grid gap-5 lg:gap-10 md:grid-cols-[318px_318px] lg:grid-cols-[318px_318px_318px] mx-auto">
          {content}
        </div>
      </div>
    </>
  );
}
