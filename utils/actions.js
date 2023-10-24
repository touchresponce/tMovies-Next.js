"use server"; // not supported in turbo

const headers = {
  headers: {
    "X-API-KEY": process.env.KEY,
  },
};

export async function getSearch(link) {
  const url = `https://api.kinopoisk.dev/v1.3/movie?name=!null&poster.previewUrl=!null&limit=36&${link}`;
  const data = await fetch(url, headers);

  return data.json();
}

export async function getFastSearch(query) {
  const url = `https://api.kinopoisk.dev/v1.2/movie/search?query=${query}&limit=30`;
  const data = await fetch(url, headers);

  return data.json();
}
