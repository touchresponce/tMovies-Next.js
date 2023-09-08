import { API_KEY } from "@/utils/constants";
import MainInfo from "@/app/components/MainInfo/MainInfo";
import MovieTabs from "@/app/components/UI/MovieTabs/MovieTabs";
import AdditionalInfo from "@/app/components/AdditionalInfo/AdditionalInfo";

async function getContent(id) {
  const responce = await fetch(`https://api.kinopoisk.dev/v1.3/movie/${id}`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
  return responce.json();
}

export async function generateMetadata({ params: { id } }) {
  const { name } = await getContent(id);
  return {
    title: name,
  };
}

export default async function Movie({ params: { id } }) {
  const data = await getContent(id);

  return (
    <>
      <MainInfo data={data} />
      <MovieTabs data={data} />
      <AdditionalInfo data={data} />
    </>
  );
}
