import "./Test2.css";
import MovieItemHorizont from "../UI/MovieItemHorizont/MovieItemHorizont";
import FastSearchItem from "../UI/FastSearchItem/FastSearchItem";

export default function Test2({ data }) {
  const firstList = [];
  const secondList = [];

  data.forEach((movie) => {
    if (movie.backdrop?.previewUrl && movie.logo?.url) {
      firstList.push(movie);
    } else {
      secondList.push(movie);
    }
  });

  return (
    <section className='person-list'>
      <h3 className='text'>Фильмография ({data.length})</h3>
      {firstList.length > 0 && (
        <ul className='person-list__list person-list__list_type_first'>
          {firstList.map((movie) => (
            <li
              className='person-list__item person-list__item_type_first'
              key={movie.id}
            >
              <MovieItemHorizont data={movie} key={movie.id} />
            </li>
          ))}
        </ul>
      )}
      {secondList.length > 0 && (
        <>
          <h3 className='peston-list__title text'>Смотрите так же:</h3>
          <ul className='person-list__list person-list__list_type_second'>
            {secondList.map((movie, i) => (
              <li
                className='person-list__item person-list__item_type_second'
                key={movie.id}
              >
                <FastSearchItem data={movie} />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
