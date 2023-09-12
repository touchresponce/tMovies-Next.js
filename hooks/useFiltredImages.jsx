import { useEffect, useState } from "react";
import { useGetMovieImagesQuery } from "../store/api";

export default function useFiltredImages(id) {
  const { data } = useGetMovieImagesQuery(id);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      data?.docs?.filter(
        (x) =>
          // без тмдб
          !x.url.startsWith("https://www.themoviedb") &&
          // без битых сылок из бд
          !x.url.includes("http", 1) &&
          x.type !== "promo" &&
          x.type !== "shooting" &&
          x.type !== "wallpaper" &&
          x.type !== "cover"
      )
    );

    return () => {
      setImages([]);
    };
  }, [data]);

  return { images };
}
