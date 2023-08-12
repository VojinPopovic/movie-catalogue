"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import ImdbIcon from "../../../public/imdbIcon.svg";
import { formatDate } from "@/libs/formatDate";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function BasicSlider({ data }) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const content = data?.map((item) => {
    const link = "https://image.tmdb.org/t/p/original";
    return (
      <SwiperSlide key={item.id}>
        <Image
          src={link + item.backdrop_path}
          alt=""
          width={1920}
          height={960}
        ></Image>
        <div className="absolute bottom-0 left-0 flex flex-col items-start ml-8 mb-8 gap-2 bg-[rgba(0,0,0,0.2)] px-6 py-3 rounded-[20px]">
          <p className="text-white text-4xl">{item.title}</p>
          <div className="flex w-full gap-2 items-center">
            <Image
              src={ImdbIcon}
              width={10}
              height={10}
              alt=""
              className="max-h-[20px] max-w-[30px]"
            />
            <p className="text-white text-base">
              {item.vote_average.toString().length === 1
                ? item.vote_average + ".0"
                : item.vote_average}
            </p>
          </div>
          <p className="text-white text-lg">
            {"Release date: " + formatDate(item.release_date)}
          </p>
          <Link
            href={`/about/${item.title}+${item.id}`}
            className="bg-[#BA00FC] py-2 px-6 text-white rounded-[10px]"
          >
            About
          </Link>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <>
      {!(domLoaded && data) ? (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {content}
        </Swiper>
      ) : (
        "loading"
      )}
    </>
  );
}
