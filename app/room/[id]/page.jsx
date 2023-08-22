import { API_KEY } from "@/utils/constants";
import MainInfo from "@/app/components/MainInfo/MainInfo";
import Actors from "../../components/UI/Actors/Actors";
import MovieTabs from "../../components/UI/MovieTabs/MovieTabs";

async function getContent(id) {
  const responce = await fetch(`https://api.kinopoisk.dev/v1.3/movie/${id}`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
  return responce.json();
}

export default async function Movie({ params: { id } }) {
  const data = await getContent(id);

  return (
    <>
      <MainInfo data={data} />
      <Actors data={data} />
      <MovieTabs data={data} />
    </>
  );
}
