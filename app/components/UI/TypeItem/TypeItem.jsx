import "./TypeItem.css";
import Image from "next/image";
import Movie1 from "../../../../public/images/movie1.webp";
import Movie2 from "../../../../public/images/movie2.webp";
import Movie3 from "../../../../public/images/movie3.webp";
import Serial1 from "../../../../public/images/serial1.webp";
import Serial2 from "../../../../public/images/serial2.webp";
import Serial3 from "../../../../public/images/serial3.webp";
import Cartoon1 from "../../../../public/images/cartoon1.webp";
import Cartoon2 from "../../../../public/images/cartoon2.webp";
import Cartoon3 from "../../../../public/images/cartoon3.webp";
import Anime1 from "../../../../public/images/anime1.webp";
import Anime2 from "../../../../public/images/anime2.webp";
import Anime3 from "../../../../public/images/anime3.webp";
import Link from "next/link";

export default function TypeItem({ type }) {
  let images;
  if (type === "movie") {
    images = [Movie3, Movie2, Movie1];
  } else if (type === "anime") {
    images = [Anime1, Anime2, Anime3];
  } else if (type === "tv-series") {
    images = [Serial1, Serial2, Serial3];
  } else if (type === "cartoon") {
    images = [Cartoon1, Cartoon2, Cartoon3];
  }

  return (
    <article className='type-item noselect'>
      <h2 className='type-item__title'>{type}</h2>
      <Link href={`/catalog/${type}`}>
        <div className='type-item__wrapper'>
          {images.map((image, index) => (
            <Image
              key={index}
              className={`type-item__image type-item__image_type_${
                index % 3 === 0 ? "center" : index % 3 === 1 ? "left" : "right"
              }`}
              src={image}
              width={200}
              height={300}
              alt={`поиск ${type}`}
            />
          ))}
        </div>
      </Link>
    </article>
  );
}

// import "./TypeItem.css";
// import Image from "next/image";

// export default function TypeItem({ type }) {
//   let images;
//   if (type === "movie") {
//     images = ["movie3.webp", "movie2.webp", "movie1.webp"];
//   } else if (type === "anime") {
//     images = ["anime1.webp", "anime2.webp", "anime3.webp"];
//   } else if (type === "serial") {
//     images = ["serial1.webp", "serial2.webp", "serial3.webp"];
//   } else if (type === "cartoon") {
//     images = ["cartoon1.webp", "cartoon2.webp", "cartoon3.webp"];
//   }

//   const importAll = (r) => {
//     return r.keys().map(r);
//   };

//   const imageFiles = importAll(
//     require.context("../../../../public/images", false, /\.(webp)$/)
//   );

//   return (
//     <article className='type-item noselect'>
//       <h2 className='type-item__title'>{type}</h2>
//       <div className='type-item__wrapper'>
//         {images.map((image, index) => (
//           <Image
//             key={index}
//             className={`type-item__image type-item__image_type_${
//               index % 3 === 0 ? "center" : index % 3 === 1 ? "left" : "right"
//             }`}
//             src={imageFiles.find((file) => file.includes(image))}
//             width={200}
//             height={300}
//             alt={`Поиск ${type}`}
//           />
//         ))}
//       </div>
//     </article>
//   );
// }
