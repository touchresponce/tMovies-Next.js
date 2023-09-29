import "./InfoList.css";

export default function InfoList({ data }) {
  const duration = formatTime(data.movieLength);
  const ratingKp = data.rating?.kp.toString().substring(0, 3);
  const ratingImdb = data.rating?.imdb;
  const countries = data.countries?.map((item) => item.name).join(", ");
  const genres = data.genres?.map((item) => item.name).join(", ");

  function formatTime(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours >= 1 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  return (
    <>
      <ul className='info'>
        <li className='info__item text'>{data?.year}</li>
        {data.movieLength && <li className='info__item text'>{duration}</li>}
        <li>
          <span className='info__span'>IMDB</span>
          {ratingImdb}
        </li>
        <li>
          <span className='info__span'>КП</span>
          {ratingKp}
        </li>
        {typeof data.ageRating === "number" && (
          <li className='info__item text info__item_type_age'>
            {`${data.ageRating}+`}
          </li>
        )}
      </ul>
      {data.shortDescription ? (
        <p className='text'>{data.shortDescription}</p>
      ) : null}
      <p className='text'>
        <span className='info__span'>Страна: </span>
        {countries}
      </p>
      <p className='text'>
        <span className='info__span'>Жанр: </span>
        {genres}
      </p>
    </>
  );
}
