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
    switch (pathName) {
      case "/movie":
        changeFilters("type", "movie");
        break;

      case "/tv-series":
        changeFilters("type", "tv-series");
        break;

      case "/cartoon":
        changeFilters("type", "cartoon");
        break;

      case "/anime":
        changeFilters("type", "anime");
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
    <div className='search-list__list'>
      {content.map((item) => (
        <MovieItem data={item} key={item.id} />
      ))}
    </div>
  ) : null;

  const notFound = <p className='search-list__error'>Ничего не найдено</p>;

  const error = (
    <p className='search-list__error'>Ошибка, попробуйте еще раз</p>
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
