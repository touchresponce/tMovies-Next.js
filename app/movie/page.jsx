import { API_KEY } from "@/utils/constants";
import Filters from "../components/Filters/Filters";
import SearchList from "../components/SearchList/SearchList";
// import dynamic from "next/dynamic";

async function getCartoons() {
  const responce = await fetch(
    "https://api.kinopoisk.dev/v1.3/movie?name=!null&poster.previewUrl=!null&rating.kp=5-10&rating.imdb=5-10&year=2022-2023&type=cartoon&limit=30&page=1&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1",
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  return responce.json();
}

export default async function MoviePage() {
  const { docs: cartoons } = await getCartoons();

  return (
    <>
      <Filters />
      <SearchList data={cartoons} />
    </>
  );
}
