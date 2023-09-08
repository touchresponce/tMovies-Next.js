import "./MoreButton.css";
import { useFilters, useSearch } from "@/store";
import SearchLoader from "../SearchLoader/SearchLoader";

export default function MoreButton() {
  const { status, getContent, currentPage, totalPages } = useSearch();
  const { link } = useFilters();

  const handleMoreContent = () => {
    currentPage < totalPages && getContent(currentPage + 1);
  };

  return (
    <>
      {status !== "loading" && (
        <button className='button' type='button' onClick={handleMoreContent}>
          Показать еще
          <span className='shift'>›</span>
          <div className='mask'></div>
        </button>
      )}
      {status === "loading" && <SearchLoader />}
    </>
  );
}
