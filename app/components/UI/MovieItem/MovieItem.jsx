import "./MovieItem.css";
import Link from "next/link";
import Image from "next/image";
import formatTime from "@/utils/formatTime";

export default function MovieItem({ data }) {
  const genres = data.genres ? data.genres.slice(0, 2) : null;
  const duration = formatTime(data.movieLength);
  const ratingKp = data.rating?.kp
    ? data.rating.kp.toString().substring(0, 3)
    : null;
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

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
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            placeholder='blur'
            blurDataURL={rgbDataURL(0, 0, 0)}
          />
          <div className='details'>
            <h1 className='details__title text'>{data.name || data.enName}</h1>
            <h2 className='details__subtitle text'>
              {data.year} • {data.ageRating} • {duration}
            </h2>
            {ratingKp !== null && (
              <div className='rating'>
                <i className='fas fa-star' />
                <span>{`${ratingKp}/10`}</span>
              </div>
            )}
            {Array.isArray(data.countries) && (
              <p className='country text'>{data.countries[0].name}</p>
            )}
            <div className='tags'>
              {Array.isArray(genres) &&
                genres.map((genre) => (
                  <span className='tag' key={genre.name}>
                    {genre.name}
                  </span>
                ))}
            </div>
            {data.description && (
              <p className='item__description text'>{data.description}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
