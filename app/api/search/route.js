import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const url = `https://api.kinopoisk.dev/v1.3/movie?name=!null&poster.previewUrl=!null&limit=36&${body}`;

  const data = await fetch(url, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
  }).then((res) => res.json());

  return NextResponse.json(data);
}
