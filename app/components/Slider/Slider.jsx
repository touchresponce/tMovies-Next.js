"use client";

import "./Slider.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "../UI/MovieItem/MovieItem";
import { SWIPER_BREAKPOINTS } from "@/utils/constants";

export default function Slider({ data }) {
  const list = data?.map((item) => (
    <SwiperSlide key={item.id}>
      <MovieItem data={item} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={15}
      breakpoints={SWIPER_BREAKPOINTS}
      style={{
        overflow: "visible",
        padding: "30px 0 0",
      }}
    >
      {list}
    </Swiper>
  );
}
