import "./Slider.css";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieItemHorizont from "../UI/MovieItemHorizont/MovieItemHorizont";
import MovieItemVertical from "../UI/MovieItemVertical/MovieItemVertical";
import {
  SLIDER_BREAKPOINTS_HORIZONT,
  SLIDER_BREAKPOINTS_VERTICAL,
} from "@/utils/constants";

export default function Slider({ data, horizontal, progressBar }) {
  const [progressWidth, setProgressWidth] = useState("");
  const splideRef = useRef(null);
  const progressRef = useRef(null);

  const list = data?.map((item) => (
    <SplideSlide key={item.id}>
      {horizontal ? (
        <MovieItemHorizont data={item} />
      ) : (
        <MovieItemVertical data={item} />
      )}
    </SplideSlide>
  ));

  const updateProgressBar = () => {
    if (splideRef.current) {
      const end = splideRef.current.splide.Components.Controller.getEnd() + 1;
      const rate = Math.min((splideRef.current.splide.index + 1) / end, 1);
      setProgressWidth(`${100 * rate}%`);
    }
  };

  useEffect(() => updateProgressBar(), []);

  return (
    <>
      <Splide
        ref={splideRef}
        onMove={updateProgressBar}
        className='carousel'
        options={{
          gap: "15px",
          perPage: horizontal ? 5 : 6,
          breakpoints: horizontal
            ? SLIDER_BREAKPOINTS_HORIZONT
            : SLIDER_BREAKPOINTS_VERTICAL,
          snap: true,
          speed: 800,
          pagination: false,
          lazyLoad: true,
          arrows: false,
        }}
      >
        {list}
      </Splide>
      {progressBar && (
        <div className='my-slider-progress'>
          <div
            className='my-slider-progress-bar'
            ref={progressRef}
            style={{ width: progressWidth }}
          />
        </div>
      )}
    </>
  );
}
