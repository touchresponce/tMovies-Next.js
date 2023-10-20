"use client";

import "./Slider.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SWIPER_BREAKPOINTS } from "@/utils/constants";
import MovieItemVertical from "../UI/MovieItemVertical/MovieItemVertical";

export default function Slider({ data }) {
  const list = data?.map((item) => (
    <SwiperSlide key={item.id}>
      <MovieItemVertical data={item} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      className='slider'
      spaceBetween={15}
      breakpoints={SWIPER_BREAKPOINTS}
      style={{
        overflow: "visible",
      }}
    >
      {list}
    </Swiper>
  );
}
