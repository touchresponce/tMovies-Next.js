"use client";

import "./SearchButton.css";
import { useModals } from "@/store/useModalsStore";

export default function SearchButton() {
  const { openSearch, sidebar, fastSearch, closeSearch } = useModals();

  const toggleSearch = () => {
    fastSearch ? closeSearch() : openSearch();
  };

  return (
    <button
      className={fastSearch ? "search-button close" : "search-button"}
      type='button'
      onClick={toggleSearch}
      style={{
        display: `${sidebar ? "none" : "block"}`,
      }}
    />
  );
}
