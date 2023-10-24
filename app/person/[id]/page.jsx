import Test from "@/app/components/Test/Test";
import Test2 from "@/app/components/Test2/Test2";
import { LINKS } from "@/utils/constants";

export async function generateMetadata({ params: { id } }) {
  const { name, enName } = await getPerson(id);
  return {
    title: name ? name : enName,
  };
}

async function getPerson(id) {
  const responce = await fetch(`https://api.kinopoisk.dev/v1/person/${id}`, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
  });
  return responce.json();
}

async function getMovies(id) {
  const responce = await fetch(`${LINKS.personMovies}${id}`, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
  });
  return responce.json();
}

export default async function Person({ params: { id } }) {
  const person = await getPerson(id);
  const { docs: movies } = await getMovies(id);

  return (
    <>
      <Test data={person} />
      <Test2 data={movies} />
    </>
  );
}
