import "./Test2.css";
import TestItem from "../UI/TestItem/TestItem";

export default function Test2({ data }) {
  return (
    <section className='person-list'>
      <h3 className='text'>Фильмография ({data.length})</h3>
      <div className='person-list__list'>
        {data.map((movie) => (
          <TestItem data={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}
