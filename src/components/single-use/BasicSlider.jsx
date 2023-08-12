import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import ImdbIcon from "../../../public/imdbIcon.svg";
import { formatDate } from "@/libs/formatDate";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function BasicSlider({ data }) {
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
