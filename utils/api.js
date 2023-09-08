import { API_KEY } from "./constants";
import { useFilters } from "@/store";

/**
 * поиск с фильтрами
 */
export const getMovieByFilters = (link) => {
  return fetch(
    `https://api.kinopoisk.dev/v1.3/movie?name=!null&poster.previewUrl=!null&limit=24&page=1&${link}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  ).then((res) => res.json());
};

/**
 * Быстрый поиск
 */
export const getFastSearch = (query) => {
  return fetch(`https://api.kinopoisk.dev/v1.2/movie/search?query=${query}`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  }).then((res) => res.json());
};
