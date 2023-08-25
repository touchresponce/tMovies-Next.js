"use client";

import "./SearchList.css";
import { useSearch } from "@/store";
import MovieItem from "../UI/MovieItem/MovieItem";
import MainLoader from "../UI/MainLoader/MainLoader";
import MoreButton from "../UI/MoreButton/MoreButton";
import { useEffect } from "react";

export default function SearchList() {
  const [content, currentPage, totalPages, status, getContent] = useSearch(
    (state) => [
      state.content,
      state.currentPage,
      state.totalPages,
      state.status,
      state.getContent,
    ]
  );

  useEffect(() => {
    getContent();
  }, []);

  const listNode = content?.length ? (
    <ul className='l-container'>
      {content.map((item) => (
        <MovieItem data={item} key={item.id} />
      ))}
    </ul>
  ) : null;

  const notFound = <p className='search-list__empty'>Ничего не найдено</p>;

  const error = (
    <p className='search-list__empty'>Ошибка, попробуйте еще раз</p>
  );

  return (
    <section className='search-list'>
      {status === "loading" && !content?.length > 0 && <MainLoader />}
      {status === "empty" && notFound}
      {status === "error" && error}
      {content?.length > 0 && listNode}
      {currentPage < totalPages && content?.length > 0 && <MoreButton />}
    </section>
  );
}