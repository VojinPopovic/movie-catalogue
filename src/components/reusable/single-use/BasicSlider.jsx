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
