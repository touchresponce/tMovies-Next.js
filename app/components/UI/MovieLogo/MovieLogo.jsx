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
            fill
            priority={true}
            sizes='(max-width: 768px) 100vw'
          />
        </div>
      ) : (
        <h1 className='title text'>{name || names?.name[0]}</h1>
      )}
    </>
  );
}
