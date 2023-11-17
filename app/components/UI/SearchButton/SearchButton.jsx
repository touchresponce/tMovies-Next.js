"use client";

import "./SearchButton.css";
import { useModals } from "@/store/useModalsStore";
import buttonImg from "@/public/images/search.svg";

export default function SearchButton() {
  const { openSearch, sidebar } = useModals();

  return (
    <button
      className='search-button'
      type='button'
      onClick={() => openSearch()}
    >
      <span
        className='search-button__span'
        style={{
          backgroundImage: `url(${buttonImg.src})`,
          display: `${sidebar ? "none" : "block"}`,
        }}
      />
    </button>
  );
}
