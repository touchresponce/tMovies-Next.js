"use client";

import "./ShortcutSlider.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  OPTIONS_GENRES,
  SWIPER_BREAKPOINTS_SHORTCUTS,
} from "@/utils/constants";

export default function ShortcutSlider() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Swiper
      className='shortcuts'
      breakpoints={SWIPER_BREAKPOINTS_SHORTCUTS}
      speed={800}
      style={{
        overflow: "visible",
      }}
    >
      {OPTIONS_GENRES.map((item) => (
        <SwiperSlide key={item.title}>
          <article className='genre noselect'>{item.title}</article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
