import MainInfo from "@/app/components/MainInfo/MainInfo";
import MovieTabs from "@/app/components/UI/MovieTabs/MovieTabs";
import Additional from "@/app/components/Additional/Additional";
import MovieModal from "@/app/components/MovieModal/MovieModal";

async function getContent(id) {
  const responce = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
    headers: {
      "X-API-KEY": process.env.KEY,
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

  const renderTabs = () => {
    if (data.similarMovies?.length > 0 || data.sequelsAndPrequels?.length > 0) {
      return <MovieTabs data={data} />;
    }
  };

  return (
    <>
      <MainInfo data={data} />
      {renderTabs()}
      <Additional data={data} />
      <MovieModal id={id} />
    </>
  );
}
