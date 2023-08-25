import { API_KEY } from "@/utils/constants";
import MainInfo from "@/app/components/MainInfo/MainInfo";
import MovieTabs from "../../components/UI/MovieTabs/MovieTabs";
import Actors from "@/app/components/UI/Actors/Actors";

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
      <MovieTabs data={data} />
      <Actors data={data} />
    </>
  );
}
