import "./Test2.css";
import FastSearchItem from "../UI/FastSearchItem/FastSearchItem";

export default function Test2({ data }) {
  return (
    <section className='person-list'>
      <h3 className='text'>Фильмография ({data.length})</h3>
      <ul className='person-list__list '>
        {data.map((movie) => (
          <li
            className='person-list__item person-list__item_type_first'
            key={movie.id}
          >
            <FastSearchItem data={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}
