"use server";
import { LINKS_MAIN } from "./constants";

const HEADERS_API_KINOPOISK = {
  headers: {
    "X-API-KEY": process.env.KEY,
  },
};

// поиск
export async function getSearch(link) {
  const url = `${LINKS_MAIN.search}&${link}`;
  const data = await fetch(url, HEADERS_API_KINOPOISK);

  return data.json();
}

// быстрый поиск
export async function getFastSearch(query) {
  const url = `${LINKS_MAIN.fastSearch}&query=${query}`;
  const data = await fetch(url, HEADERS_API_KINOPOISK);

  return data.json();
}

// инфа по сохраненкам с бэка
export async function getSavedMovies(arr) {
  const link = new URLSearchParams();

  for (const movie of arr) {
    link.append("id", movie.movieId);
  }

  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie?limit=250&${link.toString()}`,
    HEADERS_API_KINOPOISK
  );

  return response.json();
}

// получение фрейма коллапс
export async function getPlayerLink(id) {
  const url = `https://apicollaps.cc/list?token=${process.env.COLLAPS}&kinopoisk_id=${id}`;
  const response = await fetch(url);
  const data = await response.json();

  return data.results[0].iframe_url;
}
