import "./Background.css";
import Image from "next/image";

const getBackdropTmdb = async (movieData) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieData.externalId.tmdb}?api_key=${process.env.KEY_TMDB}`
  );
  const response = await data.json();

  console.log("   ");
  console.log("=============================================================");
  console.log("=======================>>>>>" + movieData.externalId);
  console.log("=======================>>>>>" + response);
  console.log("=============================================================");
  console.log("   ");

  return response;
};

export default async function Background({ data }) {
  const { backdrop_path } = await getBackdropTmdb(data);

  const imageSrc =
    data.backdrop.url || `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div className="background noselect">
      {/* {data.backdrop?.url && ( */}
      <Image
        // src={data.backdrop.url}
        src={imageSrc}
        alt=""
        priority
        fill
        sizes="(max-width: 768px) 100vw, 70vw"
        style={{
          objectFit: "cover",
          objectPosition: "50% 30%",
        }}
      />
      {/* )} */}
    </div>
  );
}
