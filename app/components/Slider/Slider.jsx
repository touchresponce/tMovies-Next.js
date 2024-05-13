import "./Slider.css";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { SLIDER_BREAKPOINTS } from "@/utils/constants";
import MovieItem from "../UI/MovieItem/MovieItem";

export default function Slider({ data }) {
  const [progressWidth, setProgressWidth] = useState("0%");
  const splideRef = useRef(null);

  const list = useMemo(
    () =>
      data?.map((item) => (
        <SplideSlide key={item.id}>
          <MovieItem data={item} />
        </SplideSlide>
      )),
    [data]
  );

  const updateProgressBar = useCallback(() => {
    if (splideRef.current) {
      const end = splideRef.current.splide.Components.Controller.getEnd() + 1;
      const rate = Math.min((splideRef.current.splide.index + 1) / end, 1);
      setProgressWidth(`${100 * rate}%`);
    }
  }, []);

  useEffect(() => {
    updateProgressBar();
  }, [updateProgressBar]);

  return (
    <>
      <Splide
        ref={splideRef}
        onMove={updateProgressBar}
        onResize={updateProgressBar}
        onResized={updateProgressBar}
        options={{
          gap: "15px",
          perPage: 6,
          breakpoints: SLIDER_BREAKPOINTS,
          snap: true,
          speed: 800,
          pagination: false,
          lazyLoad: true,
          arrows: false,
        }}
      >
        {list}
      </Splide>
      <div className='my-slider-progress'>
        <div
          className='my-slider-progress-bar'
          style={{ width: progressWidth }}
        />
      </div>
    </>
  );
}
