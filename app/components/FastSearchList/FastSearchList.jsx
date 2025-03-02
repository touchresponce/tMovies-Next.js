import "./FastSearchList.css";
import FastSearchItem from "../UI/FastSearchItem/FastSearchItem";

export default function FastSearchList({ data, isProfilePage = false }) {
  if (!data) return;

  return (
    <ul
      className={`fast-search-list ${
        isProfilePage ? "fast-search-list-profile" : ""
      }`}
    >
      {data.map((item) => (
        <li key={item.id}>
          <FastSearchItem data={item} />
        </li>
      ))}
    </ul>
  );
}
