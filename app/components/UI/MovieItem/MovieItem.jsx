import "./MovieItem.css";
import Link from "next/link";
import Image from "next/image";

export default function MovieItem({ data }) {
  return (
    <li className='item noselect'>
      <Link href={`/room/${data.id}`}>
        <div className='item__cover'>
          <Image
            src={data.poster.previewUrl}
            alt={data.name}
            fill
            sizes='100vw'
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </Link>
    </li>
  );
}
