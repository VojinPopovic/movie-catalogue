"use client";

import Image from "next/image";

export default function MovieCard({ movie }) {
  const link = "https://image.tmdb.org/t/p/w500";
  console.log(movie);
  return (
    <div className="w-[318px] h-[400px] bg-[#151515]">
      <div className="w-full h-[100px]">
        {movie.backdrop_path !== null ? (
          <Image
            className="w-full h-auto"
            src={link + movie.backdrop_path}
            alt=""
            width={1200}
            height={800}
            priority
          ></Image>
        ) : (
          ""
        )}
      </div>
      <div className="w-full h-[300px]"></div>
    </div>
  );
}
