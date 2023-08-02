"use client";

import Image from "next/image";

export default function MovieCard({ movie }) {
  const link = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      {movie.poster_path !== null && movie.poster_path !== undefined ? (
        <div className="w-[280px] h-[400px] xs:w-[320px] xs:h-[450px] bg-[#151515] relative">
          <div className="w-full h-full overflow-hidden absolute">
            <Image
              className="w-full h-auto"
              src={link + movie.poster_path}
              alt=""
              width={1200}
              height={800}
              priority
            ></Image>
          </div>
          <div className="w-full h-[300px]"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
