import "./Test2.css";
import MovieItemHorizont from "../UI/MovieItemHorizont/MovieItemHorizont";

export default function Test2({ data }) {
  return (
    <section className='person-list'>
      <h3 className='text'>Фильмография ({data.length})</h3>
      <div className='person-list__list'>
        {data.map((movie) => (
          <MovieItemHorizont data={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}
