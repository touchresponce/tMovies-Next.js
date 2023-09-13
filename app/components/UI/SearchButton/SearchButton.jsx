"use client";

import "./SearchButton.css";
import { useModals } from "@/store/useModalsStore";
import buttonImg from "@/public/images/search.svg";

export default function SearchButton() {
  const { openSearch } = useModals();

  return (
    <button className='search-button' onClick={() => openSearch()}>
      <span
        className='search-button__span'
        style={{
          backgroundImage: `url(${buttonImg.src})`,
        }}
      />
    </button>
  );
}
