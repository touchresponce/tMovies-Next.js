"use client";

import "./Header.css";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import SearchButton from "../UI/SearchButton/SearchButton";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [isOut, setIsOut] = useState(false);
  let scrollPrev = typeof window !== "undefined" && window.scrollY;

  // задник шапки
  function scroll() {
    if (typeof window !== "undefined") {
      window.scrollY >= 100 ? setIsScroll(true) : setIsScroll(false);
    }
  }

  // спрятать шапку
  function setHideHeader() {
    if (typeof window !== "undefined") {
      window.scrollY >= 50 && window.scrollY > scrollPrev
        ? setIsOut(true)
        : setIsOut(false);
      scrollPrev = window.scrollY;
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", setHideHeader);
      window.addEventListener("scroll", scroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", setHideHeader);
        window.removeEventListener("scroll", scroll);
      }
    };
  }, []);

  return (
    <header
      className={`header ${isScroll ? "scroll" : ""} ${isOut ? "out" : ""}`}
    >
      <div className='header__wrapper'>
        <h1 className='header__test text noselect'>Tastemovies</h1>
        <div className='header__container'>
          <Navigation />
          <SearchButton />
        </div>
      </div>
    </header>
  );
}
