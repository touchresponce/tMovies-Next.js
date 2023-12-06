import "./MovieItemBig.css";
import Image from "next/image";
import MovieLogo from "../MovieLogo/MovieLogo";

export default function MovieItemBig({ data, isVideo }) {
  return (
    <article
      className={`movie-item-big noselect ${
        isVideo ? "content__type_active" : ""
      }`}
    >
      {isVideo ? (
        <iframe
          width='100%'
          height='100%'
          src={`${data.videos.trailers[0].url}?autoplay=1&mute=1`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; web-share'
          allowFullScreen='0'
          autoPlay='1'
          mute='1'
        ></iframe>
      ) : (
        <Image
          src={data.backdrop.url}
          alt={`Постер фильма ${data.name}`}
          priority
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      )}

      <div className='content content__type_active'>
        <MovieLogo data={data} />
        <div className='infos'>Здесь информация</div>
      </div>
    </article>
  );
}
