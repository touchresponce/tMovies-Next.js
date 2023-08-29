import "./MovieLogo.css";
import Image from "next/image";

export default function MovieLogo({ data }) {
  const { name, names, logo, enName } = data;
  return (
    <>
      {logo?.url != null ? (
        <Image
          className='logo'
          src={logo.url}
          alt={name || enName}
          width={500}
          height={200}
          priority={true}
        />
      ) : (
        <h1 className='about__text about__text_type_title'>
          {name || names?.name[0]}
        </h1>
      )}
    </>
  );
}
