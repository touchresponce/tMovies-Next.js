import "./MovieItemBig.css";
import Link from "next/link";
import Image from "next/image";
import MovieLogo from "../MovieLogo/MovieLogo";
import formatTime from "@/utils/formatTime";

export default function MovieItemBig({ data }) {
  const { id, backdrop, year, movieLength, ageRating } = data;
  const ratingKp = data.rating?.kp.toString().substring(0, 3);
  const genres = data.genres[0].name;

  const renderLenght = () => {
    if (typeof movieLength === "number" && movieLength !== 0) {
      return formatTime(movieLength);
    }
  };

  return (
    <Link
      href={`/room/${id}`}
      style={{
        color: "inherit",
      }}
    >
      <div className='big-item'>
        <Image
          src={backdrop?.url}
          alt=''
          priority
          fill
          sizes='(max-width: 768px) 70vw, 55vw'
          style={{
            objectFit: "cover",
            zIndex: 1,
          }}
        />
        <div className='big-item__container'>
          <div style={{ width: "70%" }}>
            <MovieLogo data={data} />
          </div>
          <ul className='big-item__list'>
            <li className='big-item__item big-item__item_type_rating'>
              {ratingKp}
            </li>
            <li className='big-item__item'>{year}</li>
            <li className='big-item__item big-item__item_type_genre'>
              {genres}
            </li>
            <li className='big-item__item'>{renderLenght()}</li>
            <li className='big-item__item'>{`${ageRating}+`}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
