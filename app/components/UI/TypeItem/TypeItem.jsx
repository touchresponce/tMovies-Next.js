import "./TypeItem.css";
import Image from "next/image";
import Link from "next/link";
import Movie1 from "../../../../public/images/movie1.webp";
import Movie2 from "../../../../public/images/movie2.webp";
import Movie3 from "../../../../public/images/movie3.webp";
import Serial1 from "../../../../public/images/serial1.webp";
import Serial2 from "../../../../public/images/serial2.webp";
import Serial3 from "../../../../public/images/serial3.webp";
import Cartoon1 from "../../../../public/images/cartoon1.webp";
import Cartoon2 from "../../../../public/images/cartoon2.webp";
import Cartoon3 from "../../../../public/images/cartoon3.webp";
import Anime1 from "../../../../public/images/anime1.webp";
import Anime2 from "../../../../public/images/anime2.webp";
import Anime3 from "../../../../public/images/anime3.webp";

export default function TypeItem({ type, title }) {
  let images;
  if (type === "movie") {
    images = [Movie3, Movie2, Movie1];
  } else if (type === "anime") {
    images = [Anime1, Anime2, Anime3];
  } else if (type === "tv-series") {
    images = [Serial1, Serial2, Serial3];
  } else if (type === "cartoon") {
    images = [Cartoon1, Cartoon2, Cartoon3];
  }

  return (
    <article className='type-item noselect'>
      <h2 className='type-item__title text'>{title}</h2>
      <Link href={`/catalog/${type}`} className='type-item__wrapper'>
        {images.map((image, index) => (
          <Image
            key={index}
            className={`type-item__image type-item__image_type_${
              index % 3 === 0 ? "center" : index % 3 === 1 ? "left" : "right"
            }`}
            src={image}
            alt={`поиск ${type}`}
            width={200}
            height={300}
            priority={index % 3 === 0}
            placeholder='blur'
          />
        ))}
      </Link>
    </article>
  );
}
