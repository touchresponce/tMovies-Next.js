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
              alt={name || alternativeName || enName}
              title={name || alternativeName || enName}
              fill
              sizes='(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 20vw'
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        )}
        {backdrop?.previewUrl && (
          <Image
            className='horizont-item__background'
            src={backdrop?.url}
            alt={`постер ${name || alternativeName || enName}`}
            fill
            sizes='(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 20vw'
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
