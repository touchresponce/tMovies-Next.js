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
export async function getPlayerLink(id, provider) {
  let URL;
  let iframeSrc;
  //
  // let loading = false;
  //

  try {
    switch (provider) {
      case "COLLAPS":
        URL = `https://apicollaps.cc/list?token=${process.env.COLLAPS}&kinopoisk_id=${id}`;
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Collaps API error");
        }

        const dataFromCollaps = await response.json();
        iframeSrc = dataFromCollaps?.results[0]?.iframe_url || null;
        break;

      case "LUMEX":
        URL = `https://portal.lumex.host/api/short?api_token=${process.env.LUMEX}&kinopoisk_id=${id}`;
        const responseLumex = await fetch(URL);

        if (!responseLumex.ok) {
          throw new Error("Lumex API error");
        }

        const dataFromLumex = await responseLumex.json();
        iframeSrc = dataFromLumex?.data[0]?.iframe_src || null;
        break;

      default:
        // loading = false;
        return;
    }
  } catch (err) {
    console.error(`Error fetching player link from provider ${provider}:`, err);
  } finally {
    // loading = false;
  }

  return iframeSrc;
}

// задник tmbd резерв
export async function getBackdropUrl(movieData) {
  if (movieData?.backdrop?.url) {
    return movieData.backdrop.url;
  }

  const { externalId, alternativeName } = movieData;
  const tmdbApiKey = process.env.KEY_TMDB;

  try {
    if (externalId?.tmdb) {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${externalId.tmdb}?api_key=${tmdbApiKey}`
      );

      if (response.ok) {
        const { backdrop_path } = await response.json();
        if (backdrop_path) {
          // return `https://image.tmdb.org/t/p/original${backdrop_path}`;
          return `https://imagetmdb.com/t/p/original${backdrop_path}`;
        }
      }
    } else if (alternativeName) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${alternativeName}&api_key=${tmdbApiKey}`
      );

      if (response.ok) {
        const data = await response.json();
        const { backdrop_path } = data.results[0];

        // return `https://image.tmdb.org/t/p/original${backdrop_path}`;
        return `https://imagetmdb.com/t/p/original${backdrop_path}`;
      }
    }
  } catch (error) {
    console.error("Error fetching backdrop from TMDB:", error);
  }

  return null;
}
