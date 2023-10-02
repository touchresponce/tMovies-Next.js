import "./TestItem.css";
import Link from "next/link";
import Image from "next/image";

export default function TestItem({ data }) {
  const { id, backdrop, name, enName, alternativeName, logo } = data;

  return (
    <Link href={`/room/${id}`}>
      <div className='test-item noselect'>
        {logo?.url !== null && (
          <div className='test-item__logo'>
            <Image
              src={logo?.url}
              alt={`логотип ${name || alternativeName || enName}`}
              fill
              sizes='(max-width: 768px) 100vw'
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        )}
        {backdrop?.previewUrl && (
          <Image
            src={backdrop?.previewUrl}
            alt={`постер ${name || alternativeName || enName}`}
            fill
            sizes='(max-width: 768px) 100vw'
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