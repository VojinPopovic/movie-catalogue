import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function BasicSlider({ data }) {
  const content = data?.map((item) => {
    const link = "https://image.tmdb.org/t/p/original";
    return (
      <SwiperSlide>
        <Image
          src={link + item.backdrop_path}
          alt=""
          width={1920}
          height={960}
        ></Image>
        <div className="absolute bottom-0 left-0 flex flex-col items-start ml-8 mb-8 gap-2 bg-[rgba(0,0,0,0.2)] px-6 py-3 rounded-[20px]">
          <p className="text-white text-5xl">Popular</p>
          <p className="text-white text-3xl">{item.title}</p>
          <button className="bg-[#BA00FC] py-2 px-6 text-white rounded-[10px]">About</button>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <>
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
    </>
  );
}
