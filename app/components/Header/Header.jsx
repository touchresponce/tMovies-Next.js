"use client";

import "./Header.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import SearchButton from "../UI/SearchButton/SearchButton";
import BurgerButton from "../UI/BurgerButton/BurgerButton";
import { useModals } from "@/store/useModalsStore";
import LogotypeImage from "@/public/logotype.svg";
import ProfileButton from "../UI/ProfileButton/ProfileButton";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [isOut, setIsOut] = useState(false);
  const { fastSearch, sidebar, profileModal } = useModals();
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

  const isShouldVisible = !fastSearch && !sidebar && !profileModal;

  return (
    <header
      className={`header ${isScroll ? "scroll" : ""} ${
        isOut && isShouldVisible ? "out" : ""
      }`}
      style={
        fastSearch || profileModal
          ? { visibility: "hidden" }
          : { visibility: "visible" }
      }
    >
      <div className='header__wrapper'>
        <Link className='header__logo' href='/'>
          <Image
            className='header__image'
            src={LogotypeImage}
            alt='Логотип'
            height={32}
            width={32}
          />
          <p className='header__title text'>TasteMovies</p>
        </Link>
        <div className='header__container'>
          {!fastSearch && !sidebar && !profileModal && <Navigation />}
          {!fastSearch && !sidebar && <ProfileButton />}
          {!sidebar && !profileModal && <SearchButton />}
          {!fastSearch && !profileModal && <BurgerButton />}
        </div>
      </div>
    </header>
  );
}
