import { API_KEY } from "@/utils/constants";

async function getContent(id) {
  const responce = await fetch(`https://api.kinopoisk.dev/v1/person/${id}`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
  return responce.json();
}

export async function generateMetadata({ params: { id } }) {
  const { name, enName } = await getContent(id);
  return {
    title: name ? name : enName,
  };
}

export default async function Person({ params: { id } }) {
  const data = await getContent(id);

  return <h1>{data.name}</h1>;
}
