import "./MovieItemVertical.css";
import Link from "next/link";
import Image from "next/image";
import formatTime from "@/utils/formatTime";

export default function MovieItemVertical({ data }) {
  const genres = data.genres ? data.genres.slice(0, 2) : null;
  const ratingKp = data.rating?.kp
    ? data.rating.kp.toString().substring(0, 3)
    : null;

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
            src={
              data?.poster?.previewUrl
                ? data.poster.previewUrl
                : `https://st.kp.yandex.net/images/film_iphone/iphone360_${data.id}.jpg`
            }
            alt={`постер ${data.name || data.alternativeName}`}
            priority={true}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            quality={75}
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

            {ratingKp !== null && (
              <div className='details__rating'>
                <Image
                  src={`/images/${ratingKp > 4.9 ? "star" : "chunk-star"}.svg`}
                  width={24}
                  height={24}
                  alt='Рейтинг'
                />
                <span>{ratingKp}</span>
              </div>
            )}

            {Array.isArray(data.countries) && data.countries.length > 0 && (
              <p className='country text'>{data.countries[0]?.name}</p>
            )}

            {Array.isArray(genres) && (
              <div className='tags'>
                {genres.map((genre) => (
                  <span className='tag' key={genre.name}>
                    {genre.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
