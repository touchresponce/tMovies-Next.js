"use client";

import "./SliderWithVideo.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import MovieItemBig from "../UI/MovieItemBig/MovieItemBig";
import { useState, useRef, useEffect } from "react";
import { SWIPER_BREAKPOINTS_BIG } from "@/utils/constants";

export default function SliderWithVideo({ data }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [result, setResult] = useState(false);
  const swiperRef = useRef();

  const handleSlideChange = () => {
    setActiveSlideIndex(swiperRef.current.swiper.realIndex);
    setResult(false); // сбросить отображение видео
    delayedFunction(setResult); // вызов таймаута
  };

  const delayedFunction = (callback) => {
    setTimeout(() => {
      callback(true);
    }, 5000);
  };

  useEffect(() => {
    delayedFunction(setResult);
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      className='big-slider'
      breakpoints={SWIPER_BREAKPOINTS_BIG}
      centeredSlides={true}
      loop={true}
      modules={[Navigation, Autoplay]}
      navigation={true}
      speed={800}
      // autoHeight={true}
      simulateTouch={false}
      onSlideChange={handleSlideChange}
      autoplay={{
        delay: 90000,
        disableOnInteraction: false,
      }}
      style={{
        overflow: "visible",
      }}
    >
      {data.map((item, i) => (
        <SwiperSlide key={item.id}>
          <MovieItemBig
            data={item}
            // isVideo={i === activeSlideIndex && result}
            isVideo={false}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
