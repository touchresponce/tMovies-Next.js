import "./MoreButton.css";
import { useSearch } from "@/store/useSearchStore";
import SearchLoader from "../SearchLoader/SearchLoader";

export default function MoreButton({ title }) {
  const { status, getContent, currentPage, totalPages } = useSearch();

  const handleMoreContent = () => {
    currentPage < totalPages && getContent(currentPage + 1);
  };

  return (
    <>
      {status !== "loading" && (
        <button className='button' type='button' onClick={handleMoreContent}>
          {title}
          <span className='shift'>›</span>
          <div className='mask'></div>
        </button>
      )}
      {status === "loading" && <SearchLoader />}
    </>
  );
}
