"use client";

import "./FastSearch.css";
import { useState, useEffect, useRef } from "react";
import { useModals } from "@/store/useModalsStore";
import { useFastSearch } from "@/store/useFastSearchStore";
import useDebounce from "@/hooks/useDebounce";
import MainLoader from "../UI/MainLoader/MainLoader";
import FastSearchList from "../FastSearchList/FastSearchList";
import span from "@/public/images/search-close.svg";

export default function FastSearch() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const { debouncedValue, setDebouncedValue } = useDebounce(query, 400); //
  const { fastSearch, closeSearch } = useModals();
  const { status, content, getContent, reset } = useFastSearch();

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

  // отложенный запрос после изменения инпута
  useEffect(() => {
    // debouncedValue && handleRequest();
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

  // фокус на инпут
  useEffect(() => {
    if (fastSearch) {
      inputRef.current && inputRef.current.focus();
    }
  }, [fastSearch]);

  return (
    <div className={`fast-search ${fastSearch ? "fast-search_mod_open" : ""}`}>
      <button
        className='fast-search__close'
        onClick={() => closeSearch()}
        style={{
          backgroundImage: `url(${span.src})`,
        }}
      />
      <form
        className={`fast-search__form ${
          fastSearch ? "fast-search__form_mod_open" : ""
        }`}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type='text'
          className='form__field'
          placeholder='name'
          name='name'
          id='name'
          required
          onChange={handleChange}
          value={query}
          autoComplete='off'
          ref={inputRef}
        />
        <label htmlFor='name' className='form__label'>
          Название
        </label>
        {query && (
          <button
            className='fast-search__span'
            onClick={handleReset}
            style={{
              backgroundImage: `url(${span.src})`,
            }}
          />
        )}
      </form>
      {content && <FastSearchList data={content} />}
      {status === "loading" && <MainLoader />}
      {status === "empty" && notFound}
    </div>
  );
}
