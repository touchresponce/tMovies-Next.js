import "./Genres.css";
import TypeItem from "../UI/TypeItem/TypeItem";

export default function Genres() {
  return (
    <section className='section-genres'>
      <TypeItem type='movie' title='Фильмы' />
      <TypeItem type='tv-series' title='Сериалы' />
      <TypeItem type='cartoon' title='Мультфильмы' />
      <TypeItem type='anime' title='Аниме' />
    </section>
  );
}
