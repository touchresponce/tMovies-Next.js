import "./FastSearchList.css";
import FastSearchItem from "../UI/FastSearchItem/FastSearchItem";

export default function FastSearchList({ data }) {
  return (
    // <ul className={`fast-search-list ${data?.length ? "open" : ""}`}>
    <ul className='fast-search-list'>
      {data?.map((item) => (
        <li key={item.id}>
          <FastSearchItem data={item} />
        </li>
      ))}
    </ul>
  );
}
