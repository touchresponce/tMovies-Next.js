import "./MovieItem.css";
import Link from "next/link";
import Image from "next/image";

export default function MovieItem({ data }) {
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  return (
    <div className='item noselect'>
      <Link href={`/room/${data.id}`}>
        <div className='item__cover'>
          <Image
            src={data.poster.previewUrl}
            alt={`постер ${data.name || data.alternativeName}`}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            placeholder='blur'
            blurDataURL={rgbDataURL(0, 0, 0)}
          />
        </div>
      </Link>
    </div>
  );
}
