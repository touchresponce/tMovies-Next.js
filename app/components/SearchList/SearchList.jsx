"use client";

import "./SearchList.css";
import { useFilters, useSearch } from "@/store";
import MovieItem from "../UI/MovieItem/MovieItem";
import MainLoader from "../UI/MainLoader/MainLoader";
import MoreButton from "../UI/MoreButton/MoreButton";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SearchList() {
  const pathName = usePathname();
  const {
    content,
    currentPage,
    totalPages,
    status,
    getContent,
    reset: resetContent,
  } = useSearch();
  const { changeFilters, link, reset: resetLink } = useFilters();

  useEffect(() => {
    // if (pathName === "/movie") {
    //   changeFilters("type", "movie");
    // }

    switch (pathName) {
      case "/movie":
        changeFilters("type", "movie");
        break;

      default:
        break;
    }

    return () => {
      resetContent();
      resetLink();
    };
  }, []);

  useEffect(() => {
    link.length > 0 && getContent();
  }, [link]);

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
