import "./MovieItemHorizont.css";
import Link from "next/link";
import Image from "next/image";

export default function MovieItemHorizont({ data }) {
  const { id, backdrop, name, enName, alternativeName, logo } = data;

  return (
    <Link href={`/room/${id}`}>
      <div className='horizont-item noselect'>
        {logo?.url !== null && (
          <div className='horizont-item__logo'>
            <Image
              src={logo?.url}
              alt={`логотип ${name || alternativeName || enName}`}
              priority={true}
              title={name || alternativeName || enName}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              quality={75}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        )}
        {backdrop?.previewUrl && (
          <Image
            className='horizont-item__background'
            src={backdrop?.previewUrl}
            alt={`постер ${name || alternativeName || enName}`}
            priority={true}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </div>
    </Link>
  );
}
