"use client";

import "./Slider.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SWIPER_BREAKPOINTS_HORIZONT,
  SWIPER_BREAKPOINTS_VERTICAL,
} from "@/utils/constants";
import MovieItemVertical from "../UI/MovieItemVertical/MovieItemVertical";
import MovieItemHorizont from "../UI/MovieItemHorizont/MovieItemHorizont";

export default function Slider({ data, horizontal = false }) {
  const list = data?.map((item) => (
    <SwiperSlide key={item.id}>
      {!horizontal ? (
        <MovieItemVertical data={item} />
      ) : (
        <MovieItemHorizont data={item} />
      )}
    </SwiperSlide>
  ));

  return (
    <Swiper
      className='slider'
      spaceBetween={15}
      breakpoints={
        horizontal ? SWIPER_BREAKPOINTS_HORIZONT : SWIPER_BREAKPOINTS_VERTICAL
      }
      style={{
        overflow: "visible",
      }}
    >
      {list}
    </Swiper>
  );
}
