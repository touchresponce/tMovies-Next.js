import "./SearchList.css";
// import { useSelector } from "react-redux";
import MovieItem from "../UI/MovieItem/MovieItem";
// import MoreButton from "../MoreButton/MoreButton";
// import MainLoader from "../MainLoader/MainLoader";

export default function SearchList({ data }) {
  // const { content, currentPage, totalPages, status } = useSelector(
  //   (state) => state.search
  // );

  const listNode = data.length ? (
    <ul className='l-container'>
      {data.map((item) => (
        <MovieItem data={item} key={item.id} />
      ))}
    </ul>
  ) : null;

  // const notFound = <p className='search-list__empty'>Ничего не найдено</p>;

  return (
    <section className='search-list'>
      {/* {status === "loading" && !content.length > 0 && <MainLoader />} */}
      {/* {status === "empty" && notFound} */}
      {data.length > 0 && listNode}
      {/* {currentPage < totalPages && content.length > 0 && <MoreButton />} */}
    </section>
  );
}
