"use client";

import React from "react";
import MovieCard from "../reusable/MovieCard";
import { useState } from "react";
import BasicSlider from "./BasicSlider";

export default function RenderCards({ dataList }) {
  const [filteredData, setFilteredData] = useState(dataList.popularity);
  const [dataFilter, setDatafilter] = useState("popularity");
  function dataPicker(e) {
    setFilteredData(dataList[e.target.value]);
    setDatafilter(e.target.value);
  }

  const content = filteredData.results.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} dataFilter={dataFilter} />;
  });
  return (
    <>
      <div className="w-full flex justify-center flex-col">
        <div className="w-full aspect-video bg-black max-w-[1048px] mx-auto">
          <BasicSlider data={dataList.popularity.results}></BasicSlider>
        </div>
        <div className="my-10 flex justify-center">
          <select
            name="popular"
            id=""
            className="bg-transparent text-white border border-white rounded-lg px-4 py-2"
            onChange={dataPicker}
          >
            <option className="main_color" value="popularity">
              Popularity
            </option>
            <option className="main_color" value="revenue">
              Revenue
            </option>
            <option className="main_color" value="release">
              Release date
            </option>
            <option className="main_color" value="votes">
              Rating
            </option>
          </select>
        </div>
        <div className="grid gap-3 xxs:grid-cols-[250px] xs:grid-cols-[200px_200px] sm:grid-cols-[200px_200px_200px] md:grid-cols-[200px_200px_200px_200px] content:grid-cols-[200px_200px_200px_200px_200px] content:gap-3 mx-auto pb-10">
          {content}
        </div>
      </div>
    </>
  );
}
