"use server";
import { LINKS_MAIN } from "./constants";

const headers = {
  headers: {
    "X-API-KEY": process.env.KEY,
  },
};

export async function getSearch(link) {
  const url = `${LINKS_MAIN.search}&${link}`;
  const data = await fetch(url, headers);

  return data.json();
}

export async function getFastSearch(query) {
  const url = `${LINKS_MAIN.fastSearch}&query=${query}`;
  const data = await fetch(url, headers);

  return data.json();
}
