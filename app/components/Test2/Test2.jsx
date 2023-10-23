import "./Test2.css";
import MovieItemHorizont from "../UI/MovieItemHorizont/MovieItemHorizont";

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
      <div className='person-list__list'>
        {firstList.map((movie) => (
          <MovieItemHorizont data={movie} key={movie.id} />
        ))}
      </div>
      <ul>
        {secondList.map((movie) => (
          <li>{movie.name || movie.enName || movie.alternativeName}</li>
        ))}
      </ul>
    </section>
  );
}
