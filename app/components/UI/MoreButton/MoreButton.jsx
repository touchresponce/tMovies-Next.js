import "./MoreButton.css";
import { useSearch } from "@/store";
import SearchLoader from "../SearchLoader/SearchLoader";

export default function MoreButton() {
  const [status] = useSearch((state) => [state.status]);

  return (
    <>
      {status !== "loading" && (
        <button
          className='button'
          type='button'
          // onClick={() => getContent(currentPage + 1)}
        >
          Показать еще
          <span className='shift'>›</span>
          <div className='mask'></div>
        </button>
      )}
      {status === "loading" && <SearchLoader />}
    </>
  );
}
