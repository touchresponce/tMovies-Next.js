"use client";

import "./ShortcutSlider.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  OPTIONS_SHORTCUTS,
  SWIPER_BREAKPOINTS_SHORTCUTS,
} from "@/utils/constants";
import MoreButton from "../UI/MoreButton/MoreButton";

export default function ShortcutSlider() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Swiper
      // className='slider'
      className='shortcuts'
      breakpoints={SWIPER_BREAKPOINTS_SHORTCUTS}
      speed={800}
      style={{
        overflow: "visible",
      }}
    >
      {OPTIONS_SHORTCUTS.map((item) => (
        <SwiperSlide key={item.title}>
          <article className='genre noselect'>{item.title}</article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
