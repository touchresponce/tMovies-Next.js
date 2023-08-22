import "./InfoList.css";

export default function InfoList({ data }) {
  const duration = formatTime(data.movieLength);
  const ratingKp = data.rating?.kp.toString().substring(0, 3);
  const ratingImdb = data.rating?.imdb;
  const countries = data.countries?.map((item) => item.name).join(", ");
  const genres = data.genres?.map((item) => item.name).join(", ");

  // форматирование времени
  function formatTime(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours >= 1 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  return (
    <>
      <ul className='info'>
        <li className='info__item info__text'>{data?.year}</li>
        {data.movieLength && (
          <li className='info__item info__text'>{duration}</li>
        )}
        <li>
          <span className='info__span'>IMDB</span>
          {ratingImdb}
        </li>
        <li>
          <span className='info__span'>КП</span>
          {ratingKp}
        </li>
        {data.ageRating && (
          <li className='info__item info__text info__item_type_age'>
            {`${data.ageRating}+`}
          </li>
        )}
      </ul>
      <p className='about__text'>{data.shortDescription}</p>
      <p className='about__text'>
        <span className='about__span'>Страна: </span>
        {countries}
      </p>
      <p className='about__text'>
        <span className='about__span'>Жанр: </span>
        {genres}
      </p>
    </>
  );
}
