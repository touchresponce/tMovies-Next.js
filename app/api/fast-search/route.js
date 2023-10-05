import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const url = `https://api.kinopoisk.dev/v1.2/movie/search?query=${body}&limit=30`;

  const data = await fetch(url, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
  }).then((res) => res.json());

  return NextResponse.json(data);
}
