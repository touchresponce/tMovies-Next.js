"use client";

import "./SliderSelection.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import MainLoader from "../UI/MainLoader/MainLoader";

export default function SliderSelection({
  data,
  title,
  selection,
  horizontal = false,
  progressBar = false,
}) {
  //
  // suspense
  const Slider = dynamic(() => import("../Slider/Slider"), {
    loading: () => <MainLoader />,
    ssr: false,
  });

  return (
    <section className='selection'>
      <Link
        href={`/catalog/selection/${selection}`}
        className='selection__title text noselect'
      >
        {title}
        <span className='selection__span'>›</span>
      </Link>

      <Slider data={data} horizontal={horizontal} progressBar={progressBar} />
    </section>
  );
}
