import "./PersonMovies.css";
import FastSearchItem from "../UI/FastSearchItem/FastSearchItem";

export default function PersonMovies({ data }) {
  return (
    <section className='person-list'>
      <h3 className='person-list__title text'>
        Фильмография (<span className='person-list__span'>{data.length}</span>)
      </h3>
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
