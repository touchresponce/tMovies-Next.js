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
    description: `Смотреть ${name} онлайн в Full HD 720 и 1080 в онлайн-кинотеатре Tastemovies`,
  };
}

export default async function Movie({ params: { id } }) {
  const data = await getContent(id);

  //
  const renderTabs = () => {
    const { similarMovies, sequelsAndPrequels } = data;

    if (similarMovies?.length > 0 || sequelsAndPrequels?.length > 0) {
      //
      const filtredSimilar = similarMovies?.filter((movie) => movie.poster.url);

      //
      const filtredSequelsAndPrequels = sequelsAndPrequels.filter(
        (movie) => movie.poster.url && (movie.rating?.kp || movie.rating?.imdb)
      );

      return (
        <MovieTabs
          similarMovies={filtredSimilar}
          sequelsAndPrequels={filtredSequelsAndPrequels}
        />
      );
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
