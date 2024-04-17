"use client";

import "./FastSearch.css";
import { useState, useEffect, useRef } from "react";
import { useModals } from "@/store/useModalsStore";
import { useFastSearch } from "@/store/useFastSearchStore";
import useDebounce from "@/hooks/useDebounce";
import MainLoader from "../UI/MainLoader/MainLoader";
import FastSearchList from "../FastSearchList/FastSearchList";
import useNoScroll from "@/hooks/useNoScroll";

export default function FastSearch() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const { debouncedValue, setDebouncedValue } = useDebounce(query, 500); //
  const { fastSearch } = useModals();
  const { status, content, getContent, reset } = useFastSearch();

  useNoScroll(fastSearch);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleRequest = () => {
    status !== "loading" && getContent(query);
  };

  const handleReset = () => {
    status !== "loading" && setQuery("");
  };

  const notFound = (
    <p className='fast-search__error text'>
      По вашему запросу ничего не найдено
    </p>
  );

  const error = (
    <p className='fast-search__error'>Ошибка, попробуйте еще раз</p>
  );

  const renderStatus = {
    loading: <MainLoader />,
    empty: notFound,
    error: error,
  };

  // фокус на инпут
  useEffect(() => {
    if (fastSearch) {
      inputRef.current && inputRef.current.focus();
    }
  }, [fastSearch]);

  // отложенный запрос после изменения инпута
  useEffect(() => {
    if (debouncedValue) {
      reset();
      handleRequest();
    }
  }, [debouncedValue]);

  // сброс при закрытии
  useEffect(() => {
    if (!fastSearch) {
      reset();
      setQuery("");
      setDebouncedValue("");
    }
  }, [fastSearch]);

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
          required
          onChange={handleChange}
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
      {content && <FastSearchList data={content} />}
      {renderStatus[status]}
    </div>
  );
}
