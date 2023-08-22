import "./MovieLogo.css";
import Image from "next/image";

export default function MovieLogo({ data }) {
  return (
    <>
      {data.logo?.url != null ? (
        <Image
          className='logo'
          src={data.logo.url}
          alt={data.name || movie.enName}
          width={500}
          height={140}
        />
      ) : (
        <h1 className='about__text about__text_type_title'>
          {data.name || data.names?.name[0]}
        </h1>
      )}
    </>
  );
}
