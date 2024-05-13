"use client";

import "./SearchList.css";
import MainLoader from "../UI/MainLoader/MainLoader";
import MoreButton from "../UI/MoreButton/MoreButton";
import MovieItem from "../UI/MovieItem/MovieItem";
import { useEffect } from "react";
import { useFilters } from "@/store/useFiltersStore";
import { useSearch } from "@/store/useSearchStore";
import { usePathname } from "next/navigation";
import { SHORTCUTS, CONTENT_TYPES } from "@/utils/constants";

export default function SearchList() {
  const lastPart = usePathname().split("/").pop();
  const { setFilters, changeFilter, link, resetFilters } = useFilters();
  const { content, currentPage, totalPages, status, getContent, resetContent } =
    useSearch();

  useEffect(() => {
    if (CONTENT_TYPES.some((type) => type.value === lastPart)) {
      changeFilter("type", lastPart);
    } else if (lastPart in SHORTCUTS) {
      setFilters(SHORTCUTS[lastPart]);
    }

    return () => {
      resetContent();
      resetFilters();
    };
  }, []);

  useEffect(
    (prevLink) => {
      prevLink !== link && link.length > 0 && getContent();
    },
    [link]
  );

  const listNode = content.length ? (
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
      {status === "loading" && !content.length && <MainLoader />}
      {status === "empty" && notFound}
      {status === "error" && error}
      {content?.length > 0 && listNode}
      {currentPage < totalPages && content?.length > 0 && <MoreButton />}
    </section>
  );
}
