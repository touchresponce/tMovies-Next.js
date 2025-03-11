import MainInfo from "@/app/components/MainInfo/MainInfo";
import MovieTabs from "@/app/components/UI/MovieTabs/MovieTabs";
import Additional from "@/app/components/Additional/Additional";
import MovieModal from "@/app/components/MovieModal/MovieModal";

async function getContent(id) {
  const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
  });

  return response.json();
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { name } = await getContent(id);

  return {
    title: name,
    description: `Смотреть ${name} онлайн в Full HD 720 и 1080 в онлайн-кинотеатре TasteMovies`,
  };
}

export default async function Movie({ params }) {
  const { id } = await params;
  const data = await getContent(id);

  return (
    <>
      <MainInfo data={data} />
      <MovieTabs data={data} />
      <Additional data={data} />
      <MovieModal id={id} />
    </>
  );
}
