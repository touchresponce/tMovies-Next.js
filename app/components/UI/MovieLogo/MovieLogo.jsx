import "./MovieLogo.css";
import Image from "next/image";

export default function MovieLogo({ data }) {
  const { name, names, logo, enName } = data;
  return (
    <>
      {logo?.url != null ? (
        <div className='wrapper'>
          <Image
            className='logo'
            src={logo.url}
            alt={name || enName}
            priority={true}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      ) : (
        <h1 className='title text'>{name || names?.name[0]}</h1>
      )}
    </>
  );
}
