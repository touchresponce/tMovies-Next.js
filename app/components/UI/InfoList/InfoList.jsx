import "./InfoList.css";
import formatTime from "@/utils/formatTime";

export default function InfoList({ data }) {
  const duration = formatTime(data.movieLength);
  const countries = data.countries?.map((item) => item.name).join(", ");
  const genres = data.genres?.map((item) => item.name).join(", ");

  const renderRating = (rating, type) => {
    if (rating && rating[type]) {
      return (
        <li className='text'>
          <span className='info__span'>{type.toUpperCase()}</span>
          {type === "kp"
            ? rating[type].toString().substring(0, 3)
            : rating[type].toString()}
        </li>
      );
    }
  };

  return (
    <>
      <ul className='info'>
        <li className='text'>{data?.year}</li>
        {data.movieLength && <li className='text'>{duration}</li>}
        {renderRating(data.rating, "imdb")}
        {renderRating(data.rating, "kp")}
        {typeof data.ageRating === "number" && (
          <li className='text info__item_type_age'>{`${data.ageRating}+`}</li>
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
