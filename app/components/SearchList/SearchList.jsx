"use client";

import "./SearchList.css";
import MainLoader from "../UI/MainLoader/MainLoader";
import MoreButton from "../UI/MoreButton/MoreButton";
import MovieItem from "../UI/MovieItem/MovieItem";
import { useEffect, useState } from "react";
import { useFilters } from "@/store/useFiltersStore";
import { useSearch } from "@/store/useSearchStore";
import { usePathname } from "next/navigation";
import { SHORTCUTS } from "@/utils/constants";

export default function SearchList() {
  const pathname = usePathname();
  const pathParts = pathname.split("/"); //
  const lastPart = pathParts[pathParts.length - 1];
  const {
    content,
    currentPage,
    totalPages,
    status,
    getContent,
    reset: resetContent,
  } = useSearch();
  const { setFilters, changeFilters, link, reset: resetFilters } = useFilters();
  const [prevLink, setPrevLink] = useState(link);
  // const isSelection = Object.keys(SHORTCUTS).some((key) => lastPart.includes(key));

  useEffect(() => {
    switch (pathname) {
      case `/catalog/${lastPart}`:
        changeFilters("type", lastPart);
        break;

      case `/catalog/selection/${lastPart}`:
        // isSelection &&
        setFilters(SHORTCUTS[lastPart]);
        break;

      default:
        break;
    }

    return () => {
      resetContent();
      resetFilters();
    };
  }, []);

  useEffect(() => {
    prevLink !== link && link.length > 0 && getContent();
    setPrevLink(link);
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
      {currentPage < totalPages && content?.length > 0 && (
        <MoreButton title='Показать еще' />
      )}
    </section>
  );
}
