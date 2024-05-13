import "./MovieItem.css";
import Link from "next/link";
import Image from "next/image";
import formatTime from "@/utils/formatFunctions/formatTime";

export default function MovieItem({ data }) {
  const renderAgeRating = () => {
    if (typeof data.ageRating === "number" && data.ageRating !== 0) {
      return ` • ${data.ageRating}+`;
    }
  };

  const renderLenght = () => {
    if (typeof data.movieLength === "number" && data.movieLength !== 0) {
      return ` • ${formatTime(data.movieLength)}`;
    }
  };

  const renderGenre = () => {
    if (!data.genres?.length) return;
    const genre = data.genres[0].name.toUpperCase();
    return <p className='tag text'>{genre}</p>;
  };

  const renderMovieRating = () => {
    if (data.rating?.kp) {
      const ratingKp = data.rating.kp.toString().substring(0, 3);
      return (
        <div className='details__rating'>
          <Image
            src={`/images/${ratingKp > 4.9 ? "star" : "chunk-star"}.svg`}
            width={24}
            height={24}
            alt='Рейтинг'
          />
          <span>{ratingKp}</span>
        </div>
      );
    }
  };

  const renderCountry = () => {
    if (Array.isArray(data.countries) && data.countries.length) {
      return <p className='country text'>{data.countries[0]?.name}</p>;
    }
  };

  return (
    <div className='item noselect'>
      <Link
        href={`/room/${data.id}`}
        style={{
          color: "inherit",
        }}
      >
        <div className='item__cover'>
          <Image
            src={data?.poster?.previewUrl}
            alt={data.name || data.alternativeName}
            fill
            sizes='(max-width: 768px) 30vw, 20vw'
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className='details'>
            <h1 className='details__title text'>{data.name || data.enName}</h1>
            <h2 className='details__subtitle text'>
              {data.year}
              {renderAgeRating()}
              {renderLenght()}
            </h2>
            {renderMovieRating()}
            {renderCountry()}
            {renderGenre()}
          </div>
        </div>
      </Link>
    </div>
  );
}
