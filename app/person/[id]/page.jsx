import { API_KEY } from "@/utils/constants";
import Test from "@/app/components/Test/Test";
import Test2 from "@/app/components/Test2/Test2";

export async function generateMetadata({ params: { id } }) {
  const { name, enName } = await getPerson(id);
  return {
    title: name ? name : enName,
  };
}

async function getPerson(id) {
  const responce = await fetch(`https://api.kinopoisk.dev/v1/person/${id}`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
  return responce.json();
}

async function getMovies(id) {
  const responce = await fetch(
    // `https://api.kinopoisk.dev/v1.3/movie?sortField=premiere.world&sortType=-1&poster.previewUrl=%21null&limit=250&persons.id=${id}`,
    `https://api.kinopoisk.dev/v1.3/movie?selectFields=name&selectFields=logo&selectFields=id&selectFields=enName&selectFields=alternativeName&selectFields=backdrop&sortField=premiere.world&sortType=-1&page=1&name=%21null&poster.previewUrl=%21null&limit=250&persons.id=${id}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
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
