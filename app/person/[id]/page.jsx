import PersonInfo from "@/app/components/PersonInfo/PersonInfo";
import PersonMovies from "@/app/components/PersonMovies/PersonMovies";
import { LINKS_MAIN } from "@/utils/constants";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { name, enName } = await getPerson(id);
  return {
    title: name ? name : enName,
  };
}

async function getPerson(id) {
  const response = await fetch(`https://api.kinopoisk.dev/v1/person/${id}`, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
  });
  return response.json();
}

async function getMovies(id) {
  const response = await fetch(`${LINKS_MAIN.personMovies}${id}`, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
  });
  return response.json();
}

export default async function Person({ params }) {
  const { id } = await params;
  const person = await getPerson(id);
  const { docs: movies } = await getMovies(id);

  return (
    <>
      <PersonInfo data={person} />
      <PersonMovies data={movies} />
    </>
  );
}
