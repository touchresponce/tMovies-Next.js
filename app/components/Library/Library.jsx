"use client";

import "./Library.css";
import "@splidejs/react-splide/css";
import TypeItem from "../UI/TypeItem/TypeItem";
import { CONTENT_TYPES } from "@/utils/constants";

export default function Library() {
  return (
    <section className='section-library'>
      {CONTENT_TYPES.map((type) => {
        const { title, value } = type;
        return <TypeItem type={value} title={title} key={title} />;
      })}
    </section>
  );
}
