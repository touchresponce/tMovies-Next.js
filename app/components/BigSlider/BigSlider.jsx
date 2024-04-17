"use client";

import "./BigSlider.css";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieItemBig from "../UI/MovieItemBig/MovieItemBig";

export default function BigSlider({ data }) {
  return (
    <section style={{ paddingTop: "64px" }}>
      <Splide
        className='carousel-big'
        options={{
          pagination: false,
          gap: "20px",
          perPage: 1,
          type: "loop",
          speed: 1600,
          // arrows: false,
          autoplay: true,
          interval: 20000,
          pauseOnHover: true,
        }}
      >
        {data?.map((item) => (
          <SplideSlide key={item.id}>
            <MovieItemBig data={item} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
