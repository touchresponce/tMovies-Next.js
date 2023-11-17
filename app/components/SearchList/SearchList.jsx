"use client";

import "./SearchList.css";
import MainLoader from "../UI/MainLoader/MainLoader";
import MoreButton from "../UI/MoreButton/MoreButton";
import { useEffect, useState } from "react";
import { useFilters } from "@/store/useFiltersStore";
import { useSearch } from "@/store/useSearchStore";
import { usePathname } from "next/navigation";
import MovieItemVertical from "../UI/MovieItemVertical/MovieItemVertical";

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

  const [prevLink, setPrevLink] = useState(link);

  useEffect(() => {
    switch (pathName) {
      case "/catalog/movie":
        changeFilters("type", "movie");
        break;

      case "/catalog/tv-series":
        changeFilters("type", "tv-series");
        break;

      case "/catalog/cartoon":
        changeFilters("type", "cartoon");
        break;

      case "/catalog/anime":
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
    prevLink !== link && link.length > 0 && getContent();
    setPrevLink(link);
  }, [link]);

  const listNode = content?.length ? (
    <div className='search-list__list'>
      {content.map((item) => (
        <MovieItemVertical data={item} key={item.id} />
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
      {currentPage < totalPages && content?.length > 0 && (
        <MoreButton title='Показать еще' />
      )}
    </section>
  );
}
