import "./InfoList.css";
import formatSeasonsWord from "@/utils/formatFunctions/formatSeasonsWord";
import formatTime from "@/utils/formatFunctions/formatTime";

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

  const renderSeasonsInfo = () => {
    if (data.seasonsInfo?.length) {
      return (
        <li className='text'>{formatSeasonsWord(data.seasonsInfo.length)}</li>
      );
    }
  };

  const renderAgeRating = () =>
    typeof data.ageRating === "number" && (
      <li className='text info__item_type_age'>{`${data.ageRating}+`}</li>
    );

  const renderShortDescription = () => {
    if (data.shortDescription) {
      return <p className='text'>{data.shortDescription}</p>;
    }
  };

  return (
    <>
      <ul className='info'>
        <li className='text'>{data?.year}</li>
        {data.movieLength && <li className='text'>{duration}</li>}
        {renderSeasonsInfo()}
        {renderRating(data.rating, "imdb")}
        {renderRating(data.rating, "kp")}
        {renderAgeRating()}
      </ul>
      {renderShortDescription()}
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
