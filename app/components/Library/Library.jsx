"use client";

import "./Library.css";
import "@splidejs/react-splide/css";
import TypeItem from "../UI/TypeItem/TypeItem";

export default function Library() {
  return (
    <section className='section-library'>
      <TypeItem type='movie' title='Фильмы' />
      <TypeItem type='tv-series' title='Сериалы' />
      <TypeItem type='cartoon' title='Мультфильмы' />
      <TypeItem type='anime' title='Аниме' />
    </section>
  );
}
