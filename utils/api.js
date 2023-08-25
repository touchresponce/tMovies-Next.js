import { API_KEY } from "./constants";

/**
 * фильтры
 */
export const getMovieByFilters = (url) => {
  return fetch(
    // `https://api.kinopoisk.dev/v1.3/movie?field=poster.previewUrl&search=!null&limit=24&${url}`,
    "https://api.kinopoisk.dev/v1.3/movie?name=!null&poster.previewUrl=!null&rating.kp=5-10&rating.imdb=5-10&year=2022-2023&type=cartoon&limit=30&page=1&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1",
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
