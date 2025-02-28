"use client";

import "./FastSearch.css";
import { useState, useEffect, useRef } from "react";
import { useModals } from "@/store/useModalsStore";
import { useFastSearch } from "@/store/useFastSearchStore";
import useDebounce from "@/hooks/useDebounce";
import MainLoader from "../UI/MainLoader/MainLoader";
import FastSearchList from "../FastSearchList/FastSearchList";
import useNoScroll from "@/hooks/useNoScroll";
import useEscClose from "@/hooks/useEscClose";

const renderStatus = {
  loading: <MainLoader />,
  empty: (
    <p className='fast-search__error text'>
      По вашему запросу ничего не найдено
    </p>
  ),
  error: <p className='fast-search__error'>Ошибка, попробуйте еще раз</p>,
};

export default function FastSearch() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const { debouncedValue, setDebouncedValue } = useDebounce(query, 500); //
  const { fastSearch, closeSearch } = useModals();
  const { status, content, getContent, reset } = useFastSearch();

  useNoScroll(fastSearch);
  useEscClose(closeSearch);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleRequest = () => {
    status !== "loading" && getContent(query);
  };

  const handleReset = () => {
    status !== "loading" && setQuery("");
  };

  // фокус на инпут
  useEffect(() => {
    if (fastSearch) {
      inputRef.current && inputRef.current.focus();
    }
  }, [fastSearch]);

  useEffect(() => {
    if (debouncedValue) {
      reset();
      handleRequest();
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (!fastSearch) {
      reset();
      setQuery("");
      setDebouncedValue("");
    }
  }, [fastSearch]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div
      className={`fast-search ${
        fastSearch ? "fast-search_mod_open" : ""
      } scrollbar`}
    >
      <form
        className={`fast-search__form ${
          fastSearch ? "fast-search__form_mod_open" : ""
        }`}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type='text'
          className='fast-search__input'
          placeholder='title'
          name='title'
          id='title'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={query}
          autoComplete='off'
          spellCheck='false'
          ref={inputRef}
        />
        <label htmlFor='title' className='fast-search__label'>
          Название
        </label>
        {query && (
          <button className='fast-search__span' onClick={handleReset} />
        )}
      </form>
      {content.length > 0 && <FastSearchList data={content} />}
      {renderStatus[status]}
    </div>
  );
}
