import { API_KEY } from "./constants";

/**
 * поиск с фильтрами
 */
export const getMovieByFilters = (link) => {
  return fetch(
    `https://api.kinopoisk.dev/v1.3/movie?name=!null&poster.previewUrl=!null&limit=36&${link}`,
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
  return fetch(
    `https://api.kinopoisk.dev/v1.2/movie/search?query=${query}&limit=30`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  ).then((res) => res.json());
};

// /**
//  *
//  */
// export const getPersonById = (id) => {
//   return fetch(`https://api.kinopoisk.dev/v1/person/${id}`, {
//     headers: {
//       "X-API-KEY": API_KEY,
//     },
//   }).then((res) => res.json());
// };
