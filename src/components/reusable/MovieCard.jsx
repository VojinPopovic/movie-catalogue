"use client";

import Image from "next/image";
import Link from "next/link";
import ImdbIcon from "../../../public/imdbIcon.svg";
import Tilt from "react-parallax-tilt";

export default function MovieCard({ movie, dataFilter }) {
  const link = "https://image.tmdb.org/t/p/w500";
  const encoded = encodeURIComponent("+");
  return (
    <>
      {!(movie.poster_path === null && movie.poster_path === undefined) ? (
        <Tilt>
          <div className="w-full h-[350px] xs:w-[200px] xs:h-[300px] bg-[#151515] relative rounded-xl overflow-hidden">
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
            <div className="absolute bg-[rgba(0,0,0,0.7)] w-full bottom-0 flex flex-col justify-center text-white pl-6 py-6 gap-2">
              <p className="text-lg leading-none">{movie.title}</p>
              {!(dataFilter === "release" || dataFilter === "votes") ? (
                <div className="flex w-full gap-2 items-center">
                  <Image src={ImdbIcon} width={30} height={30} alt="" />
                  <p className="text-white text-base">
                    {movie.vote_average.toString().length === 1
                      ? movie.vote_average + ".0"
                      : movie.vote_average}
                  </p>
                </div>
              ) : (
                movie.release_date
              )}
              <Link
                href={`/about/${movie.title}${encoded}${movie.id}`}
                className="bg-[#BA00FC] py-2 px-6 text-white rounded-[10px] max-w-[120px] text-center"
              >
                About
              </Link>
            </div>
          </div>
        </Tilt>
      ) : (
        ""
      )}
    </>
  );
}
